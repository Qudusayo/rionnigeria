import { createClient } from "contentful";
import moment from "moment";
import { Card } from "..";
import GridLayout from "../../components/GridLayout/GridLayout";
import Component from "../../layout/Component/Component";

import styles from "./../../styles/analysis.module.scss";

export default function Analysis({ analysis }) {
  return (
    <Component>
      <div className={styles.AnalysisSector}>
        <h2 className={styles.AnalysisSectorTitle}>Analysis</h2>
        <p className={styles.AnalysisSectorInfo}>
          Certain issues, development and topics of discussion deserve thorough
          and critical analysis, or careful examination of such, in order to
          clearly and genuinely understand it. Such may not be as simple as
          their facial meanings or difficult to tackle with emotion, but needed
          to be given a careful examination of the substance in order to find
          out clear truth and form right opinion on it.
        </p>
        <div className={styles.AnalysisSectorContent}>
          <div className={styles.GridFiveLayer}>
            <div className={styles.GridFiveLayerMain}>
              <Card
                imageUrl={
                  "https:" + analysis[0].fields.thumbnail.fields.file.url
                }
                contentURL={"/analysis/" + analysis[0].fields.slug}
                title={analysis[0].fields.title}
                date={moment(analysis[0].fields.publishedDate).format(
                  "MMM DD, YYYY, HH:mm"
                )}
                summary="Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
              />
            </div>
            <div className={styles.GridFiveLayerSection}>
              {analysis
                .slice(1, 5)
                .reverse()
                ?.map((analys) => {
                  return (
                    <Card
                      key={analys.sys.id}
                      imageUrl={
                        "https:" + analys.fields.thumbnail.fields.file.url
                      }
                      contentURL={"/analysis/" + analys.fields.slug}
                      title={analys.fields.title}
                      date={moment(analys.fields.publishedDate).format(
                        "MMM DD, YYYY, HH:mm"
                      )}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <GridLayout grid={4}>
          {analysis.slice(5)?.map((analys) => {
            return (
              <Card
                key={analys.sys.id}
                imageUrl={"https:" + analys.fields.thumbnail.fields.file.url}
                contentURL={"/analysis/" + analys.fields.slug}
                title={analys.fields.title}
                date={moment(analys.fields.publishedDate).format(
                  "MMM DD, YYYY, HH:mm"
                )}
                className={styles.CardAbsolute}
              />
            );
          })}
        </GridLayout>
      </div>
    </Component>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "analysis",
    select:
      "sys.id,fields.slug,fields.thumbnail,fields.title,fields.publishedDate",
  });

  return {
    props: {
      analysis: response.items,
    },
    revalidate: 1,
  };
}
