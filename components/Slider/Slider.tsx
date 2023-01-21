import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import EffectCarousel from "./effect-carousel";
import Image from "next/image";

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export default function Slider() {
  return (
    <div className="App">
      <h1>OUR PROJECTS</h1>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectCarousel]}
        loop={true}
        loopedSlides={5}
        slidesPerView={"auto"}
        grabCursor={true}
        // @ts-ignore
        effect="carousel"
        autoplay={{ delay: 3000 }}
        init={true}
      >
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <Image
              src={"/bg/about-bg.webp"}
              className="image"
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              objectFit="cover"
              alt="slider"
            />
            <div className="slide-content">
              <h2>The PathWay</h2>
              <p>
                A group of intergalactic criminals must pull together to stop a
                fanatical warrior with plans to purge the universe.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <Image
              src={"/bg/activities-bg.webp"}
              className="image"
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              objectFit="cover"
              alt="slider"
            />
            <div className="slide-content">
              <h2>The Library Mosque</h2>
              <p>
                Determined to ensure Superman&#39;s ultimate sacrifice was not
                in vain, Bruce Wayne aligns forces with Diana Prince with plans
                to recruit a team of metahumans to protect the world from an
                approaching threat of catastrophic proportions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <Image
              src={"/bg/contact-bg.webp"}
              className="image"
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              objectFit="cover"
              alt="slider"
            />
            <div className="slide-content">
              <h2>The School Mosque</h2>
              <p>
                Following the events of Avengers: Endgame (2019), Spider-Man
                must step up to take on new threats in a world that has changed
                forever.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <Image
              src={"/images/mosque.webp"}
              className="image"
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              objectFit="cover"
              alt="slider"
            />
            <div className="slide-content">
              <h2>The General Mosque</h2>
              <p>
                Supervillains Harley Quinn, Bloodsport, Peacemaker and a
                collection of nutty cons at Belle Reve prison join the
                super-secret, super-shady Task Force X as they are dropped off
                at the remote, enemy-infused island of Corto Maltese.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <Image
              src={"/images/library.webp"}
              className="image"
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              objectFit="cover"
              alt="slider"
            />
            <div className="slide-content">
              <h2>Islamic Library</h2>
              <p>
                Imprisoned on the planet Sakaar, Thor must race against time to
                return to Asgard and stop Ragnarök, the destruction of his
                world, at the hands of the powerful and ruthless villain Hela.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <Image
              src={"/images/school.webp"}
              className="image"
              width={1200}
              height={1200}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              objectFit="cover"
              alt="slider"
            />
            <div className="slide-content">
              <h2>The School</h2>
              <p>
                Imprisoned on the planet Sakaar, Thor must race against time to
                return to Asgard and stop Ragnarök, the destruction of his
                world, at the hands of the powerful and ruthless villain Hela.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
