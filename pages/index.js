import Navbar from "../components/Navbar/Navbar";
import Slider from "../components/Slider/Slider";
import styles from "./../styles/Index.module.scss";

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
          <div className={styles.PosersSector}>
            <Card
              imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
            <Card
              imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
            <Card
              imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
            <Card
              imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
              title="10 Places you can visit after your hajj"
              date="Mon, 15th Aug."
            />
          </div>
        </div>
        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Travails of Reverts</h2>
          <div className={styles.TravailsSector}>
            <div className={styles.TravailsSectorMain}>
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                type="flex-right"
                summary={
                  "Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
                }
              />
            </div>
            <div className={styles.TravailsSectorSection}>
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
            </div>
          </div>
        </div>

        <div className={styles.HomeContentSector}>
          <h2 className={styles.HomeContentSectorTitle}>Analysis</h2>
          <div className={styles.AnalysisSector}>
            <div className={styles.AnalysisSectorMain}>
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                summary="Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
              />
            </div>
            <div className={styles.AnalysisSectorSection}>
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
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
          <div className={styles.RebutalsSector}>
            <div className={styles.RebutalsSectorMain}>
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
            <div className={styles.RebutalsSectorExtra}>
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
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="ARE AHMADIS MUSLIMS?"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
            </div>
            <div className={styles.QnASectorSection}>
              <h2>Other News</h2>
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.rCard}
              />
              <Card
                type="flex-left-sm"
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
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

function Card({ imageUrl, title, date, summary, type, className }) {
  return (
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
  );
}
