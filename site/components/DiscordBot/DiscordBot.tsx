import { CSSProperties } from "@stitches/react";
import { styled } from "../../stitches.config";

import { BotImg, BotText } from "./Components";

type Props = {
  isVerified?: boolean;
  style?: CSSProperties;
  size?: number;
  image?: string;
  status?: string;
  name: string;
};

export default function DiscordBot({
  isVerified,
  style,
  size = 1.5,
  image,
  status,
  name,
}: Props) {
  return (
    <Wrap
      css={{
        width: `calc(208px * ${size})`,
        fontSize: `calc(10px * ${size})`,
        ...style,
      }}
    >
      {image && <BotImg src={image} />}
      <BotText name={name} status={status} isVerified={isVerified} />
    </Wrap>
  );
}

const Wrap = styled("div", {
  background: "#2e3136",
  height: "4.2em",
  borderRadius: 7,
  display: "flex",
  alignItems: "center",
  padding: "0 0.8em",
  color: "#8e9297",

  "&:hover": {
    color: "#dcddde",
  },
});
