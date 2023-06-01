import Discord from "discord.js";
import "dotenv/config";
import ms from "ms";

const log = console.log;
const error = console.error;

const client = new Discord.Client({
  shards: "auto",
  intents: [Discord.GatewayIntentBits.Guilds],
});

log(process.env.TOKEN ? "✅ Found TOKEN Env var" : "❌ Missing TOKEN Env var");

async function login() {
  log("Attempting login...");
  try {
    await client.login(process.env.TOKEN);
    log("🤖 Logged in");
  } catch (e) {
    log("🫤 Failed to login, error:", e);
  }
}

async function getPrice() {
  try {
    const raw = await fetch("https://api.coinbase.com/v2/prices/eth-usd/spot");
    const { data } = (await raw.json()) as Response;
    return Math.floor(+data.amount);
  } catch (e) {
    error("Failed to fetch from coinbase api, error:", e);
  }
}

async function setBotActivity() {
  const price = await getPrice();
  if (!price) return;

  const ClientPresence = client.user!.setActivity(`$${price}`, {
    type: Discord.ActivityType.Watching,
  });

  log(`Activity set to ${ClientPresence.activities[0].name}`);
}

(async function main() {
  await login();
  setInterval(setBotActivity, ms("30 sec"));
})();

//--

type Response = {
  data: { base: "ETH"; currency: "USD"; amount: string };
};
