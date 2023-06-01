import type { AppProps } from "next/app";
import { globalStyles } from "../stitches.config";
import HeadMeta from "../components/HeadMeta";
import Script from "next/script";

export default function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Script async src="https://cdn.splitbee.io/sb.js" />
      <HeadMeta />
      <Component {...pageProps} />
    </>
  );
}
