import Router from "next/router";
import NProgress from "nprogress";

import Main from "../layout/Main/Main";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/virtual";

import "../styles/globals.scss";
import "../styles/main.scss";
import "../styles/effect-carousel.scss";

import "../styles/Nprogress.scss";
import Head from "next/head";

// Router Events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
