import Head from "next/head";

export default function HeadMeta(){
  return (
  <Head>
      <title>Eth Price Discord Bot</title>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
      <meta name="title" content="Eth Price Discord Bot" />
      <meta name="description" content="Ethereum Price Bot for Discord"/>

      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://eth-price-discord-bot.vercel.app"/>
      <meta property="og:title" content="Eth Price Discord Bot"/>
      <meta property="og:description" content="Ethereum Price Bot for Discord"/>
      <meta property="og:image" content="https://i.imgur.com/DF2mVL0.jpg"/>

      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://eth-price-discord-bot.vercel.app"/>
      <meta property="twitter:title" content="Eth Price Discord Bot"/>
      <meta property="twitter:description" content="Ethereum Price Bot for Discord"/>
      <meta property="twitter:image" content="https://i.imgur.com/DF2mVL0.jpg" />
  </Head>
   );
}
