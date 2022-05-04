import { styled } from "../stitches.config";
import DiscordBot from "../components/DiscordBot/DiscordBot";
import Github from "../components/Github";
import InviteButton from "../components/InviteButton";
import useGetEthPrice from "../hooks/useGetEthPrice";

export default function Index() {
  const { price } = useGetEthPrice();

  return (
    <Container>
      <DiscordBot
        image="https://cdn.discordapp.com/avatars/736610809597264032/5cd342758a4d1d9547d0e545123309a5.png?size=256"
        name="ETH Price"
        status={`Watching $${price}`}
        size={1.8}
        style={{ boxShadow: "$1" }}
        isVerified
      />

      <InviteButton />
      <Github />
    </Container>
  );
}

const Container = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 33,
});
