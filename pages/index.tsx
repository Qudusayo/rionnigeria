import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import GridLayout from "../components/GridLayout/GridLayout";
import styles from "./../styles/Index.module.scss";
import { CardType } from "../types";

export default function Home() {
  return (
    <div className={styles.Home}>
      <div>
        <Navbar type={"solid"} />
        <Slider />
      </div>
      <div className={styles.HomeContent}>
        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Posers</h2>
          <GridLayout lgGrid={4} mdGrid={1}>
            <Card
              imageUrl="/images/dubai-skyline.webp"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
            <Card
              imageUrl="/images/dubai-skyline.webp"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
            <Card
              imageUrl="/images/dubai-skyline.webp"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
            <Card
              imageUrl="/images/dubai-skyline.webp"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
          </GridLayout>
        </div>
        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Travails of Reverts</h2>
          <div className={styles.FlexImageColumn}>
            <div className={styles.FlexImageColumnMain}>
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                type="flex-right"
                summary={
                  "Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
                }
              />
            </div>
            <div className={styles.FlexImageColumnSection}>
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
            </div>
          </div>
        </div>

        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Analysis</h2>
          <div className={styles.GridFiveLayer}>
            <div className={styles.GridFiveLayerMain}>
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                summary="Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
              />
            </div>
            <div className={styles.GridFiveLayerSection}>
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
            </div>
          </div>
        </div>

        <div className={styles.Ad}>
          <h2>Get better result with the just one click</h2>
          <button>Start now</button>
        </div>

        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Rebutals</h2>
          <div className={styles.FlexLeftNoImgCard}>
            <div className={styles.FlexLeftNoImgCardMain}>
              <Card
                imageUrl="/images/dubai-skyline.webp"
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
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                className={styles.rCard}
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                className={styles.rCard}
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                className={styles.rCard}
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
            </div>
          </div>
        </div>

        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Questions & Answers</h2>
          <div className={styles.QnASector}>
            <div className={styles.QnASectorMain}>
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
              <Card
                imageUrl="/images/dubai-skyline.webp"
                title="ARE AHMADIS MUSLIMS?"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
            </div>
            <div className={styles.QnASectorSection}>
              <h2>Other News</h2>
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="/images/dubai-skyline.webp"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Card({
  imageUrl,
  title,
  date,
  summary,
  type,
  className,
  contentURL = "/",
}: CardType) {
  return (
    <Link href={contentURL}>
      <div
        className={[
          styles.Card,
          type === "flex-left" && styles.CardFlexLeft,
          type === "flex-right" && styles.CardFlexRight,
          type === "flex-left-sm" && styles.CardFlexLeftSm,
          className,
        ].join(" ")}
      >
        {imageUrl && <img src={imageUrl} alt="title" />}
        <div>
          <span className={styles.CardDate}>
            <span>Published on</span> {date}
          </span>
          <h2>{title}</h2>
          {summary && <p>{summary}</p>}
        </div>
      </div>
    </Link>
  );
}
