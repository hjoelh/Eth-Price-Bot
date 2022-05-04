import { styled } from "../../../stitches.config";

type Props = {
  name: string;
  status?: string;
  isVerified?: boolean;
};

export default function BotText({ name, status, isVerified }: Props) {
  return (
    <div>
      <BotNameWrap>
        <BotName>{name}</BotName>

        <BotTag>
          {isVerified && <TickSVG />}
          BOT
        </BotTag>
      </BotNameWrap>

      {status && <BotStatus>{status}</BotStatus>}
    </div>
  );
}

const BotNameWrap = styled("div", {
  display: "flex",
  lineHeight: "2em",
  alignItems: "center",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  maxWidth: "14em",
});

const BotStatus = styled("p", {
  color: "#8e9297",
  padding: 0,
  margin: 0,
  fontSize: "1.2em",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  maxWidth: "12em",
});

const BotName = styled("p", {
  color: "inherit",
  padding: 0,
  transition: "$1",
  margin: 0,
  fontSize: "1.6em",
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const BotTag = styled("div", {
  background: "#7289da",
  color: "white",
  fontSize: "1em",
  padding: "0.1em 0.4em",
  borderRadius: "0.3em",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "0.4em",
  height: "1.5em",
  gap: 5,
});

function TickSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Verified Bot"
      aria-hidden="false"
      width={16}
      height={16}
      viewBox="4 4 8 8"
    >
      <path d="M7.4 11.17 4 8.62l1-1.36 2 1.53L10.64 4 12 5z" fill="#fff" />
    </svg>
  );
}
