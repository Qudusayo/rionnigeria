import { Card } from "..";
import GridLayout from "../../components/GridLayout/GridLayout";
import Navbar from "../../components/Navbar/Navbar";
import Component from "../../layout/Component/Component";
import styles from "./../../styles/posers.module.scss";

export default function Posers() {
  return (
    <Component>
      <div className={styles.PosersSector}>
        <h2 className={styles.PosersSectorTitle}>Posers</h2>
        <p className={styles.PosersSectorInfo}>
          Christian fanatics and critics are not relaxing in their aim to mow
          down Islam with unimaginable lies and negative comments, yet there are
          numerous questions and knots in their faith calling for solutions
          before they can settle on criticising Islam.
          <br /> Some of such knots are posed hereunder for them to tackle and
          for any doubting Muslim to mind before considering Christianity. Some
          of these posers can also be found in our books and a lot is still
          there!
          <br />
          <u>
            We strongly welcome contributions from Muslims brothers and sisters
          </u>
        </p>
        <div className={styles.PosersSectorContent}>
          <div
            className={[
              styles.FlexLeftNoImgCard,
              styles.PosersSectorContentMain,
            ].join(" ")}
          >
            <div className={styles.FlexLeftNoImgCardMain}>
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                type="flex-left"
                summary={
                  "Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
                }
              />
            </div>
            <div className={styles.FlexLeftNoImgCardExtra}>
              <Card
                className={styles.rCard}
                title="THE KEYWORD PRAYERS OF THE PROPHETS: ANOTHER DEGREE QURAN HAS OVER BIBLE"
                date="Mon, 15th Aug."
              />
              <Card
                className={styles.rCard}
                title="CHRISTMAS: AN ERRONEOUS & FALSE CELEBRATION, REFLECTION OF CHRISTIANITY"
                date="Mon, 15th Aug."
              />
              <Card
                className={styles.rCard}
                title="1QURAN 3:61, A VERSE CHRISTIANS DARE NOT ATTEMPT"
                date="Mon, 15th Aug."
              />
              <Card
                className={styles.rCard}
                title="MYTH OF DEFINING A CHRISTIAN"
                date="Mon, 15th Aug."
              />
            </div>
          </div>
        </div>
        <GridLayout grid={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
            return (
              <Card
                key={index}
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
            );
          })}
        </GridLayout>
      </div>
    </Component>
  );
}
