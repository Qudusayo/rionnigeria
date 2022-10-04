import Main from "../layout/Main/Main";

import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "swiper/scss/virtual";

import "../styles/globals.scss";
import "../styles/main.scss";
import "../styles/effect-carousel.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Main>
      <Component {...pageProps} />
    </Main>
  );
}

export default MyApp;
