import { createClient } from "contentful";
import moment from "moment";
import { Card } from "..";
import GridLayout from "../../components/GridLayout/GridLayout";
import Component from "../../layout/Component/Component";
import styles from "./../../styles/posers.module.scss";
import PageSeo from "../../layout/PageSeo";

export default function Posers({ posers }) {
  return (
    <PageSeo title="Posers">
      <Component>
        <div className={styles.PosersSector}>
          <h2 className={styles.PosersSectorTitle}>Posers</h2>
          <p className={styles.PosersSectorInfo}>
            Christian fanatics and critics are not relaxing in their aim to mow down Islam with unimaginable lies and
            negative comments, yet there are numerous questions and knots in their faith calling for solutions before
            they can settle on criticising Islam.
            <br /> Some of such knots are posed hereunder for them to tackle and for any doubting Muslim to mind before
            considering Christianity. Some of these posers can also be found in our books and a lot is still there!
            <br />
            <u>We strongly welcome contributions from Muslims brothers and sisters</u>
          </p>
          <div className={styles.PosersSectorContent}>
            <div className={[styles.FlexLeftNoImgCard, styles.PosersSectorContentMain].join(" ")}>
              <div className={styles.FlexLeftNoImgCardMain}>
                <Card
                  imageUrl={"https:" + posers[0].fields.thumbnail.fields.file.url}
                  contentURL={"/posers/" + posers[0].fields.slug}
                  title={posers[0].fields.title}
                  date={moment(posers[0].fields.publishedDate).format("MMM DD, YYYY, HH:mm")}
                  type="flex-left"
                  summary={
                    "Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
                  }
                />
              </div>
              <div className={styles.FlexLeftNoImgCardExtra}>
                {posers
                  .slice(1, 5)
                  .reverse()
                  ?.map((poser) => {
                    return (
                      <Card
                        key={poser.sys.id}
                        contentURL={"/posers/" + poser.fields.slug}
                        title={poser.fields.title}
                        date={moment(poser.fields.publishedDate).format("MMM DD, YYYY, HH:mm")}
                        className={styles.rCard}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          <GridLayout lgGrid={4} mdGrid={2}>
            {posers.slice(5)?.map((poser) => {
              return (
                <Card
                  key={poser.sys.id}
                  imageUrl={"https:" + poser.fields.thumbnail.fields.file.url}
                  contentURL={"/posers/" + poser.fields.slug}
                  title={poser.fields.title}
                  date={moment(poser.fields.publishedDate).format("MMM DD, YYYY, HH:mm")}
                  className={styles.CardAbsolute}
                />
              );
            })}
          </GridLayout>
        </div>
      </Component>
    </PageSeo>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "poser",
    select: "sys.id,fields.slug,fields.thumbnail,fields.title,fields.publishedDate",
  });

  return {
    props: {
      posers: response.items,
    },
    revalidate: 1,
  };
}
