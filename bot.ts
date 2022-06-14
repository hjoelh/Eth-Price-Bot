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

async function main() {
  console.log("Attempting Login");
  await client.login(process.env.TOKEN);
  console.log("Logged in.");
  if (client.user) {
    const ClientPresence = client.user.setActivity(`$${await getPrice()}`, {
      type: ActivityTypes.WATCHING,
    });

    console.log(`Activity set to ${ClientPresence.activities[0].name}`);
  } else {
    console.log("Not logged in", { user: client.user });
  }
  process.exit();
}

main();

type Response = {
  data: { base: "ETH"; currency: "USD"; amount: string };
};
