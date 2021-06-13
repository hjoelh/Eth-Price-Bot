import styled from "styled-components";

export default function DiscordBot({ verified, image, name, subText, size }) {
  return (
    <>
      <Wrap size={size}>
        <LogoWrap>
          <Logo src={image} alt="Eth Bot" />
          <Online />
        </LogoWrap>

        <div
          style={{
            maxWidth: "16em",
            display: "inline-block",
            marginLeft: "1.2em",
          }}
        >
          <TopText>
            <Text>{name}</Text>

            <Bot>
              {verified && <Tick src="/tick.svg" alt="Verified Bot" />}
              BOT
            </Bot>
          </TopText>

          <SubText>{subText}</SubText>
        </div>
      </Wrap>
    </>
  );
}

const Wrap = styled.div`
  background: #2e3136;
  width: ${({ size }) => `calc(208px * ${size})`};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-size: ${({ size }) => `calc(10px * ${size})`};
  font-family: Whitney, "Helvetica Neue", Helvetica, Arial, sans-serif;
  height: 4.2em;
  transition: all 0.1s;
  border-radius: 7px;
  &:hover {
    background: #33363c;
  }
  display: flex;
  align-items: center;
  padding: 0 0.8em;
`;

const TopText = styled.div`
  display: flex;
  line-height: 2em;
  align-items: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Text = styled.p`
  color: #8e9297;
  padding: 0;
  transition: all 0.1s;
  margin: 0;
  font-size: 1.6em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  ${Wrap}:hover & {
    color: #dcddde;
  }
`;

const SubText = styled.p`
  color: #8e9297;
  padding: 0;
  margin: 0;
  font-size: 1.2em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Logo = styled.img`
  border-radius: 50%;
  width: 3.2em;
  height: 3.2em;
  object-fit: contain;
`;

const Online = styled.div`
  border-radius: 50%;
  width: 1.4em;
  height: 1.4em;
  position: absolute;
  background: rgb(59, 165, 92);
  border: 0.25em solid #2c2f33;
  bottom: 0.3em;
  right: 0em;
`;

const LogoWrap = styled.div`
  position: relative;
  display: inline-flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Bot = styled.div`
  background: #7289da;
  color: white;
  font-size: 1em;
  padding: 0.1em 0.4em;
  border-radius: 0.3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.4em;
  height: 1.5em;
`;

const Tick = styled.img`
  padding-right: 0.4em;
  height: 0.7em;
`;

function TickSVG(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Verified Bot"
      aria-hidden="false"
      width={16}
      height={16}
      viewBox="4 4 8 8"
    >
      <path d="M7.4 11.17L4 8.62l1-1.36 2 1.53L10.64 4 12 5z" fill="#fff" />
    </svg>
  );
}
