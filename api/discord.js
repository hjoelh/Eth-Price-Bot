const Discord = require("discord.js");
const fetch = require("node-fetch");

const client = new Discord.Client();

async function AsyncLogin() {
  await client.login(process.env.TOKEN);
}

async function getPrice() {
  let raw = await fetch("https://api.coinbase.com/v2/prices/eth-usd/spot");
  let json = await raw.json();
  let eth = await json.data.amount;
  let ethStr = await eth.toString();
  return ethStr;
}

module.exports = async (req, res) => {
  await AsyncLogin();
  const ethPrice = await getPrice();
  await client.user.setActivity("$" + ethPrice, { type: "WATCHING" });
  res.status(200).send(`great success! - $${ethPrice}`);
  console.log(`$${ethPrice}`);
};
