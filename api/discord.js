const Discord = require("discord.js");
const fetch = require("node-fetch");

const client = new Discord.Client();

async function getPrice() {
  const raw = await fetch("https://api.coinbase.com/v2/prices/eth-usd/spot");
    const json = await raw.json();
      return json.data.amount
};

module.exports = async (req, res) => {
  await client.login(process.env.TOKEN)
  const ethPrice = await getPrice();
  await client.user.setActivity("$" + ethPrice, { type: "WATCHING" });
  res.status(200).send(`great success! - $${ethPrice}`);
  console.log(`$${ethPrice}`);
};
