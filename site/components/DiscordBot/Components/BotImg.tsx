import { styled } from "../../../stitches.config";

type Props = {
  src: string;
  isOffline?: boolean;
};

export default function BotImg({ src, isOffline }: Props) {
  return (
    <LogoWrap>
      <Logo src={src} alt="Bot" />
      {isOffline !== true && <Online />}
    </LogoWrap>
  );
}

const Logo = styled("img", {
  borderRadius: "50%",
  width: "3.2em",
  height: "3.2em",
  objectFit: "cover",
});

const Online = styled("div", {
  borderRadius: "50%",
  width: "1.4em",
  height: "1.4em",
  position: "absolute",
  background: "rgb(59, 165, 92)",
  border: "0.25em solid #2c2f33",
  bottom: "0.3em",
  right: "0em",
});

const LogoWrap = styled("div", {
  position: "relative",
  display: "inline-flex",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "1.2em",
});
