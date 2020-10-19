import { FaDiscord, FaEthereum } from "react-icons/fa";
import HeadMeta from "../components/head.js";
import Particle from "../components/particles.js";




export default function Home() {
  return (
    <>
      <HeadMeta />
      <Particle />
      <div className="main">
        <h1> Eth <span> <FaEthereum/></span>  price bot </h1>
        <img className="image" src="/main.png" alt="E" />

        <div className="buttonDiv">
          <button className="button1" type="button">
            <a className="link" href="http://bit.ly/ethbotdiscord" download="lofi">
              Invite to your server <FaDiscord />
            </a>
          </button>
     
        </div>
      </div>
    </>
  );
}
