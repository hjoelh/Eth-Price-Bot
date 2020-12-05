require('dotenv').config();
const fetch = require("node-fetch");
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

client.login(process.env.TOKEN);

async function getPrice() {
    let raw = await fetch('https://api.coinbase.com/v2/prices/eth-usd/spot');
    let json = await raw.json()
    let eth = await json.data.amount
    let ethStr = await eth.toString()
      return ethStr
}

setInterval( () => getPrice().then(ethPrice => {
  client.user.setActivity('$' + ethPrice, { type: 'WATCHING' })
    .then(presence => console.log(`Activity set to ${presence.activities[0].name}`))
    .catch(error => console.log(error));
}), 40000)