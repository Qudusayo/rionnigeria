import moment from "moment";
import { createClient } from "contentful";
import Navbar from "../../components/Navbar/Navbar";

import { Card } from "..";

import { TypeQuestionAnswers, TypeQuestionAnswersFields } from "../../types";

import styles from "./../../styles/q-n-a.module.scss";

export default function QnA({
  questionAndAnswers,
}: {
  questionAndAnswers: TypeQuestionAnswers[];
}) {
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
                contentURL={"/q-&-a/" + question.fields.slug}
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

  const response = await client.getEntries<TypeQuestionAnswersFields>({
    content_type: "questionAnswers",
    select:
      "sys.id,fields.slug,fields.thumbnail,fields.title,fields.publishedDate",
  });

  return {
    props: {
      questionAndAnswers: response.items,
    },
    revalidate: 1,
  };
}
