import fetch from "node-fetch";
import Discord from "discord.js";
import { ActivityTypes } from "discord.js/typings/enums";
import "dotenv/config";

const client = new Discord.Client({
  shards: "auto",
  intents: [Discord.Intents.FLAGS.GUILDS],
});

console.log("Found Token - ", !!process.env.TOKEN);

async function getPrice() {
  const raw = await fetch("https://api.coinbase.com/v2/prices/eth-usd/spot");
  const { data } = (await raw.json()) as Response;
  return data.amount;
}

async function login() {
  console.log("Attempting Login");
  client.login(process.env.TOKEN).then(() => "Logged in.");
}

async function setBotActivity() {
  const ClientPresence = client.user!.setActivity(`$${await getPrice()}`, {
    type: ActivityTypes.WATCHING,
  });

  console.log(`Activity set to ${ClientPresence.activities[0].name}`);
}

async function main() {
  try {
    await login();
    setInterval(setBotActivity, 30000);
  } catch (e) {
    console.log(e);
  }
}

main();

//--

type Response = {
  data: { base: "ETH"; currency: "USD"; amount: string };
};
