import { styled } from "../stitches.config";
import { FaDiscord } from "react-icons/fa";

export default function InviteButton() {
  return (
    <Button>
      <Link href="http://bit.ly/ethbotdiscord">Invite to your server</Link>

      <IconWrap>
        <FaDiscord />
      </IconWrap>
    </Button>
  );
}

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

  cursor: "pointer",
  "&:hover": {
    filter: "brightness(50%)",
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
