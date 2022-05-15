import DiscordBot from "./DiscordBot";
import { render, screen } from "@testing-library/react";

test("bot displays correct text props", () => {
  const confirmTextDisplays = () => {
    screen.getByText(name);
    screen.getByText(status);
  };

  const { rerender } = render(<DiscordBot name={name} status={status} />);
  confirmTextDisplays();

  rerender(<DiscordBot name={name} status={status} />);
  expect(screen.queryByLabelText("Verified Bot")).not.toBeInTheDocument();

  rerender(<DiscordBot name={name} status={status} isVerified />);
  screen.getByLabelText("Verified Bot");
  confirmTextDisplays();

  rerender(<DiscordBot name={name} status={status} isVerified />);
  expect(screen.queryByAltText("Bot")).not.toBeInTheDocument();

  rerender(<DiscordBot name={name} status={status} isVerified image={img} />);
  expect(screen.queryByAltText("Bot")).toBeInTheDocument();
  confirmTextDisplays();
});

const name = "bot name";
const status = "bot status";
const img =
  "https://cdn.discordapp.com/avatars/736610809597264032/5cd342758a4d1d9547d0e545123309a5.png?size=256";
