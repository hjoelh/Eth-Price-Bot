import { useEffect, useRef } from "react";

export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    callback();

    let foo = setInterval(tick, delay);
    return () => clearInterval(foo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

//https://overreacted.io/making-setinterval-declarative-with-react-hooks/
