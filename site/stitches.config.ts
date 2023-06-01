import { createStitches } from "@stitches/react";

export const { styled, getCssText, theme, globalCss } = createStitches({
  theme: {
    transitions: { 1: "all 0.33s" },
    shadows: {
      1: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      2: "rgba(0, 0, 0, 0.35) 0px 5px 5px",
    },
  },
});

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
    fontFamily: "Whitney, Helvetica Neue, Helvetica, Arial, sans-serif",
  },
  "#__next": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
});
