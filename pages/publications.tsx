import Component from "../layout/Component/Component";
import PageSeo from "../layout/PageSeo";
import styles from "./../styles/publications.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "../components/Subscribe/Subscribe";

export default function Publications() {
  return (
    <PageSeo title="Publications">
      <Component>
        <div className={styles.Publications}>
          <h2 className={styles.PublicationsSectorMainTitle}>
            Top Publications
          </h2>
          <p className={styles.PublicationsSectorInfo}>
            Some of the best books for this week
          </p>
        </div>
        <div className="publicationsSwiperCard">
          <>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={30}
              // centeredSlides={true}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              freeMode={true}
              modules={[Navigation, Pagination, FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <BookDisplayCard
                  image="/book.svg"
                  type="carousel"
                  title="THE SECRET OF OUR IMAMS"
                  author="K.R. Ayoola, K.R. Ayoola"
                  year={"2020"}
                />
              </SwiperSlide>
            </Swiper>
          </>
        </div>

        <h2 className={styles.PublicationsSectorTitle}>Browse Our Books</h2>
        <div className={styles.PublicationsShelve}>
          {Array(12)
            .fill("")
            .map((_, index) => (
              <BookDisplayCard
                key={index}
                type="block"
                image="/book.svg"
                title="THE SECRET OF OUR IMAMS"
                author="K.R. Ayoola, K.R. Ayoola"
                year={"2020"}
              />
            ))}
        </div>
      </Component>
    </PageSeo>
  );
}

const BookDisplayCard = ({
  image,
  title,
  author,
  year,
  type,
}: {
  image: string;
  title: string;
  author: string;
  year: string;
  type?: "carousel" | "block";
}) => {
  return (
    <div
      className={[
        styles.BookDisplayCard,
        type === "carousel" && styles.CarouselCard,
      ].join(" ")}
    >
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      {type === "block" && <span>{year}</span>}
      {type === "carousel" && <Button title="Download" />}
    </div>
  );
};
