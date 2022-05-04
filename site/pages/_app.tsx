import type { AppProps } from "next/app";
import { globalStyles } from "../stitches.config";
import HeadMeta from "../components/HeadMeta";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <HeadMeta />
      <Component {...pageProps} />
    </>
  );
}
