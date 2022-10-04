import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import EffectCarousel from "./effect-carousel.esm";

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
        effect="carousel"
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <img src={"/bg/about-bg.jpeg"} alt="" />
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
            <img src={"/bg/activities-bg.jpeg"} alt="" />
            <div className="slide-content">
              <h2>The Library Mosque</h2>
              <p>
                Determined to ensure Superman&#39;s ultimate sacrifice was not in
                vain, Bruce Wayne aligns forces with Diana Prince with plans to
                recruit a team of metahumans to protect the world from an
                approaching threat of catastrophic proportions.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-carousel-animate-opacity">
            <img src={"/bg/contact-bg.jpeg"} alt="" />
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
            <img src={"/images/mosque.jpeg"} alt="" />
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
            <img src={"/images/library.jpeg"} alt="" />
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
            <img src={"/images/school.jpeg"} alt="" />
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
