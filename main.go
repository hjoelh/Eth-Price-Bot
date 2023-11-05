package main

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strconv"
	"sync"
	"time"

	"github.com/bwmarrin/discordgo"
	"github.com/joho/godotenv"
)

const endpoint = "https://api.coinbase.com/v2/prices/eth-usd/spot"
const shards = 4

func worker(id int, token string) {
	discord, err := discordgo.New("Bot " + token)
	if err != nil {
		log.Fatalf("Error creating discord session: %v", err)
	}

	discord.ShardCount = shards
	discord.ShardID = id

	err = discord.Open()
	if err != nil {
		log.Fatalf("Error opening discord ws: %v", err)
	}
	defer discord.Close()

	for {
		res, err := getPrice()
		if err != nil {
			log.Printf("Error getting price for shard %d: %v \n", id, err)
		} else {
			fmt.Printf("WorkerId %v got %v \n", id, "$"+res)
			err = discord.UpdateWatchStatus(0, "$"+res)
			if err != nil {
				log.Printf("Error updating discord status for shard %d: %v \n", id, err)
			}
		}
		time.Sleep(30 * time.Second)
	}

}

func main() {
	fmt.Println("hello world 🌍👋")
	token := getEnvOrDie("TOKEN")

	wg := sync.WaitGroup{}

	for shardId := 0; shardId < shards; shardId++ {
		wg.Add(1)
		go worker(shardId, token)
	}

	wg.Wait()
}

func getEnvOrDie(key string) string {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading env: %v", err)
	}

	value, ok := os.LookupEnv(key)
	if !ok {
		log.Fatalf("Could not find %v in .env", key)
	}

	return value
}

type Response struct {
	Data struct {
		Base     string `json:"base"`
		Currency string `json:"currency"`
		Amount   string `json:"amount"`
	} `json:"data"`
}

func getPrice() (string, error) {
	res, err := http.Get(endpoint)

	if res != nil {
		defer res.Body.Close()
	}

	if err != nil {
		return "", fmt.Errorf("failed to fetch: %v", err)
	}

	jsonPayload, err := decodeJson[Response](res.Body)
	if err != nil {
		return "", fmt.Errorf("failed to decode json: %v", err)
	}

	amount, err := strconv.ParseFloat(jsonPayload.Data.Amount, 64)
	if err != nil {
		return "", fmt.Errorf("invalid amount format: %v", err)
	}

	return fmt.Sprintf("%.0f", amount), nil
}

func decodeJson[T any](r io.Reader) (T, error) {
	var v T
	err := json.NewDecoder(r).Decode(&v)
	return v, err
}
