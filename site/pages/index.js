import { useEffect, useState, useRef } from "react";
import { createGlobalStyle, keyframes } from "styled-components";
import styled from "styled-components";
import { FaDiscord, FaEthereum } from "react-icons/fa";

import HeadMeta from "../components/head.js";
import DiscordBot from "../components/discordbot";
import Github from "../components/github";

export default function Home() {
  const [price, setPrice] = useState("......");

  async function getPrice() {
    const raw = await fetch("https://api.coinbase.com/v2/prices/eth-usd/spot");
    const { data } = await raw.json();
    setPrice(data.amount);
  }

  useInterval(() => {
    getPrice();
  }, 5000);

  return (
    <>
      <GlobalStyle />
      <HeadMeta />
      <>
        <Container>
          <DiscordBot
            image="https://cdn.discordapp.com/avatars/736610809597264032/5cd342758a4d1d9547d0e545123309a5.png?size=256"
            name="ETH Bot"
            subText={`Watching $${price}`}
            verified
            size={1.8}
          />

          <Button>
            <Link href="http://bit.ly/ethbotdiscord">
              <Icon>
                <FaDiscord />
              </Icon>
              Invite to your server
            </Link>
          </Button>
          <Github />
        </Container>
      </>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    callback();

    let foo = setInterval(tick, delay);
    return () => clearInterval(foo);
  }, []);
}
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/

// styles ---------------------------------------

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
}

`;
// ------------------------------------------------

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 0 25px;
  padding-top: 25%;
`;

const spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin: 55px;
  color: black;
  text-align: center;
  span {
    display: inline-block;
    animation: 3s ${spin};
    animation-iteration-count: infinite;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 2em 2em;
  height: 3.75em;
  width: 16em;
  border-radius: 7px;
  border: none;
  font-size: 1rem;
  font-weight: 900;
  background-image: linear-gradient(to bottom, #7289da 0%, #2e3136 15%);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: inherit;
  text-decoration: none;
  position: relative;
`;

const Icon = styled.div`
  position: absolute;
  top: 12px;
  right: 32px;
  transform: rotateY(180deg);
`;
