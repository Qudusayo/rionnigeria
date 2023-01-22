import Component from "../layout/Component/Component";
import PageSeo from "../layout/PageSeo";
import styles from "./../styles/publications.module.scss";

export default function Publications() {
  return (
    <PageSeo title="Publications">
      <Component>
        <div className={styles.Publications}>
          <h2 className={styles.PublicationsSectorTitle}>Top Publications</h2>
          <p className={styles.PublicationsSectorInfo}>
            Some of the best books for this week
          </p>
        </div>

        <h2 className={styles.PublicationsSectorTitle}>Browse Our Books</h2>
        <div className={styles.PublicationsShelve}>
          {Array(12)
            .fill("")
            .map((_, index) => (
              <BookDisplayCard
                key={index}
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
    <div className={styles.BookDisplayCard}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <span>{year}</span>
    </div>
  );
};
