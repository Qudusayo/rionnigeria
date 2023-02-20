import { createClient } from "contentful";
import moment from "moment";
import { Card } from "..";
import GridLayout from "../../components/GridLayout/GridLayout";
import Component from "../../layout/Component/Component";

import styles from "./../../styles/rebutals.module.scss";
import { TypeRebuttal, TypeRebuttalFields } from "../../types";
import PageSeo from "../../layout/PageSeo";

export default function Rebutals({ rebuttals }: { rebuttals: TypeRebuttal[] }) {
  return (
    <PageSeo title="Rebuttals">
      <Component>
        <h2 className={styles.RebutalsSectorTitle}>Rebutals</h2>
        <p className={styles.RebutalsSectorInfo}>
          Certain issues, development and topics of discussion deserve thorough
          and critical analysis, or careful examination of such, in order to
          clearly and genuinely understand it. Such may not be as simple as
          their facial meanings or difficult to tackle with emotion, but needed
          to be given a careful examination of the substance in order to find
          out clear truth and form right opinion on it
        </p>
        <div className={styles.RebutalsSectorContent}>
          <div
            className={[styles.FlexImageColumn, styles.FlexImageColumnRev].join(
              " "
            )}
          >
            <div className={styles.FlexImageColumnMain}>
              <Card
                imageUrl={
                  "https:" + rebuttals[0].fields.thumbnail.fields.file.url
                }
                contentURL={"/rebuttals/" + rebuttals[0].fields.slug}
                title={rebuttals[0].fields.title}
                date={moment(rebuttals[0].fields.publishedDate).format(
                  "MMM DD, YYYY, HH:mm"
                )}
                type="flex-right"
                summary={
                  "Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
                }
              />
            </div>
            <div className={styles.FlexImageColumnSection}>
              {rebuttals
                .slice(1, 4)
                .reverse()
                ?.map((rebuttal) => {
                  return (
                    <Card
                      key={rebuttal.sys.id}
                      type="flex-left-sm"
                      imageUrl={
                        "https:" + rebuttal.fields.thumbnail.fields.file.url
                      }
                      contentURL={"/rebuttals/" + rebuttal.fields.slug}
                      title={rebuttal.fields.title}
                      date={moment(rebuttal.fields.publishedDate).format(
                        "MMM DD, YYYY, HH:mm"
                      )}
                      className={styles.rCard}
                    />
                  );
                })}
            </div>
          </div>
        </div>
        <GridLayout lgGrid={4} mdGrid={2}>
          {rebuttals.slice(4)?.map((rebuttal) => {
            return (
              <Card
                key={rebuttal.sys.id}
                imageUrl={"https:" + rebuttal.fields.thumbnail.fields.file.url}
                contentURL={"/rebuttals/" + rebuttal.fields.slug}
                title={rebuttal.fields.title}
                date={moment(rebuttal.fields.publishedDate).format(
                  "MMM DD, YYYY, HH:mm"
                )}
                className={styles.CardAbsolute}
              />
            );
          })}
        </GridLayout>
      </Component>
    </PageSeo>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries<TypeRebuttalFields>({
    content_type: "rebuttal",
    select:
      "sys.id,fields.slug,fields.thumbnail,fields.title,fields.publishedDate",
  });

  return {
    props: {
      rebuttals: response.items,
    },
    revalidate: 1,
  };
}
