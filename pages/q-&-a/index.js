import { createClient } from "contentful";
import moment from "moment";
import { Card } from "..";
import Navbar from "../../components/Navbar/Navbar";

import styles from "./../../styles/q-n-a.module.scss";

export default function QnA({ questionAndAnswers }) {
  console.log(questionAndAnswers);
  return (
    <div className={styles.QnA}>
      <div>
        <Navbar type={"solid"} />
      </div>
      <div className={styles.QnASector}>
        <h2 className={styles.QnASectorTitle}>Q&A</h2>
        <p className={styles.QnASectorInfo}>
          Certain issues, development and topics of discussion deserve thorough
          and critical analysis, or careful examination of such, in order to
          clearly and genuinely understand it. Such may not be as simple as
          their facial meanings or difficult to tackle with emotion, but needed
          to be given a careful examination of the substance in order to find
          out clear truth and form right opinion on it
        </p>
        <div className={styles.QnASectorCards}>
          {questionAndAnswers?.map((question) => {
            return (
              <Card
                key={question.sys.id}
                imageUrl={"https:" + question.fields.thumbnail.fields.file.url}
                title={question.fields.title}
                date={moment(question.fields.publishedDate).format(
                  "MMM DD, YYYY, HH:mm"
                )}
                className={styles.CardAbsolute}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const response = await client.getEntries({
    content_type: "questionAnswers",
  });

  return {
    props: {
      questionAndAnswers: response.items,
    },
    revalidate: 1,
  };
}
