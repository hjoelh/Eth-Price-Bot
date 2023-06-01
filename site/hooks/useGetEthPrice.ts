import { useEffect, useState } from "react";

export default function useGetEthPrice() {
  const [price, setPrice] = useState("...");

  useEffect(() => {
    async function getPrice() {
      const raw = await fetch(
        "https://api.coinbase.com/v2/prices/eth-usd/spot"
      );

      const { data } = (await raw.json()) as Response;
      const rounded = Math.floor(+data.amount);
      setPrice(rounded.toString());
    }

    getPrice(); // initial call
    const interval = setInterval(() => getPrice(), 5000);

    return () => clearInterval(interval);
  }, []);

  return { price };
}

type Response = {
  data: { base: "ETH"; currency: "USD"; amount: string };
};
