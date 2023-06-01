import { styled } from "@stitches/react";
import { VscGithub } from "react-icons/vsc";

export default function Github() {
  return (
    <StyledLink
      rel="noreferrer"
      className="github"
      href="https://github.com/hjoelh/Eth-Price-Bot"
      target="_blank"
      aria-label="GitHub"
    >
      <VscGithub />
      Star on Github
    </StyledLink>
  );
}

const StyledLink = styled("a", {
  color: "black",
  fontSize: "15px",
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 5,
  border: "1px solid black",
  borderRadius: 7,
  padding: "0.5em 1em",
  boxShadow: "$1",
  transition: "$1",

  "&:hover": {
    boxShadow: "$2",
  },
});
