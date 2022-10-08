import { createClient } from "contentful";
import moment from "moment";
import { Card } from "..";
import GridLayout from "../../components/GridLayout/GridLayout";
import Component from "../../layout/Component/Component";

import styles from "./../../styles/travails.module.scss";

export default function Travails({ travailsOfRevertes }) {
  return (
    <Component>
      <div className={styles.TravailsSector}>
        <h2 className={styles.TravailsSectorTitle}>Travails of Reverts</h2>
        <p className={styles.TravailsSectorInfo}>
          It is reported in the Bukhariy hadith that the Prophet said:{" "}
          <b>
            &ldquo;Every Child is born with a correct nature of Islamic
            submission, but his parents later make him a Jew or a Christian or a
            Magian.&rdquo;
          </b>{" "}
          Many people born outside Islam as a result of parental and/or societal
          factors have one way or the other retraced their steps back to their
          natural faith, they have claimed back their birthright by reverting to
          Islam and have been enjoying the best tranquillity of life with
          unshakeable hope of salvation in the Hereafter. We bring to you from{" "}
          <b>
            <u>books/magazines, websites, and personal contacts</u>
          </b>
          , the travails of some lucky and reasonable people who are not
          tantalized with fake promises offered by custodians of empty faiths!
          Your experience or those you know is highly welcome.
          <br />
          <br />
          Send to our e-mail address (info@rionnigeria.org), if possible with
          full information/identities. Thanks!
        </p>
        <div className={styles.TravailsSectorContent}>
          {/* <div className={styles.FlexImageColumn}>
            <div className={styles.FlexImageColumnMain}>
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
            <div className={styles.FlexImageColumnSection}>
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
          </div> */}
          <GridLayout grid={4}>
            {travailsOfRevertes?.map((travails) => {
              return (
                <Card
                  key={travails.sys.id}
                  imageUrl={
                    "https:" + travails.fields.thumbnail.fields.file.url
                  }
                  contentURL={"/travails/" + travails.fields.slug}
                  title={travails.fields.title}
                  date={moment(travails.fields.publishedDate).format(
                    "MMM DD, YYYY, HH:mm"
                  )}
                  className={styles.CardAbsolute}
                />
              );
            })}
          </GridLayout>
        </div>
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
    content_type: "travailsOfRevertes",
  });

  return {
    props: {
      travailsOfRevertes: response.items,
    },
    revalidate: 1,
  };
}
