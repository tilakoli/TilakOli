import "../styles/globals.css";
import Loader from "../components/Loader/index";
import Router from "next/router";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
  });
  return (
    <>
      {loading ? <Loader /> : null}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
