import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import EffectCarousel from "./effect-carousel";
import Image from "next/image";
import { useState } from "react";

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
  const [isSwiperInitialized, setIsSwiperInitialized] = useState(false);
  return (
    <div className="App">
      <h1>OUR PROJECTS</h1>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectCarousel]}
        loop={true}
        loopedSlides={5}
        slidesPerView={"auto"}
        grabCursor={true}
        //@ts-ignore
        effect="carousel"
        autoplay={{ delay: 1000 }}
        init={true}
        onAfterInit={(swiper) => {
          setIsSwiperInitialized(true);
        }}
        lazy={true}
      >
        <SwiperSlide>
          <SwiperSlideContent
            isSwiperInitialized={isSwiperInitialized}
            imageUrl={"/bg/about-bg.webp"}
            title={"The PathWay"}
            description={
              "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            isSwiperInitialized={isSwiperInitialized}
            imageUrl={"/bg/activities-bg.webp"}
            title={"The Library Mosque"}
            description={
              "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            isSwiperInitialized={isSwiperInitialized}
            imageUrl="/bg/contact-bg.webp"
            title={"The School Mosque"}
            description={
              "Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            isSwiperInitialized={isSwiperInitialized}
            imageUrl={"/images/mosque.webp"}
            title={"The General Mosque"}
            description={
              "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            isSwiperInitialized={isSwiperInitialized}
            imageUrl={"/images/library.webp"}
            title={"The Library Mosque"}
            description={
              "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlideContent
            isSwiperInitialized={isSwiperInitialized}
            imageUrl="/images/school.webp"
            title={"The School Mosque"}
            description={
              "Imprisoned on the planet Sakaar, Thor must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela."
            }
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const SwiperSlideContent = ({
  imageUrl,
  title,
  description,
  isSwiperInitialized,
}: {
  imageUrl: string;
  title: string;
  description: string;
  isSwiperInitialized: boolean;
}) => (
  <div className="swiper-carousel-animate-opacity">
    {isSwiperInitialized && (
      <Image
        src={imageUrl}
        className="image"
        width={1200}
        height={1200}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        objectFit="cover"
        alt="slider"
      />
    )}
    <div className="slide-content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);
