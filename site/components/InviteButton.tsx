import { styled } from "../stitches.config";
import { FaDiscord } from "react-icons/fa";

export default function InviteButton() {
  return (
    <RelativeDiv style={{ position: "relative" }}>
      <InstallsTxt>4000+ installs</InstallsTxt>

      <Button>
        <Link href="http://bit.ly/ethbotdiscord">Invite to your server</Link>

        <IconWrap>
          <FaDiscord />
        </IconWrap>
      </Button>
    </RelativeDiv>
  );
}

const RelativeDiv = styled("div", {
  position: "relative",
});

const InstallsTxt = styled("p", {
  position: "absolute",
  top: -5,
  fontSize: "0.8em",
  background: "#7289da",
  borderRadius: "0.3em",
  padding: 4,
  left: -20,
  transform: "rotate(-10deg)",
  boxShadow: "$1",
  zIndex: 1,
  color: "white",
});

const Button = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  boxShadow: "$1",
  height: "3.75em",
  width: "16em",
  borderRadius: 7,
  border: "none",
  fontSize: "1rem",
  fontWeight: 900,
  background: "#2e3136",
  transition: "$1",
  position: "relative",

  "&:hover": {
    boxShadow: "$2",
  },
});

const Link = styled("a", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  color: "inherit",
  textDecoration: "none",
});

const IconWrap = styled("div", {
  position: "absolute",
  top: 12,
  right: 32,
  transform: "rotateY(180deg)",
});
