import { createClient } from "contentful";
import BlogPost from "../../components/BlogPost/BlogPost";
import Component from "../../layout/Component/Component";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function QnASlug({ qna }) {
  if (!qna) return;

  const { post, author, publishedDate, title } = qna.fields;
  return (
    <Component>
      <BlogPost
        post={post}
        title={title}
        author={author}
        publishedDate={publishedDate}
        sector="Q & A"
      />
    </Component>
  );
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "questionAnswers",
  });

  const paths = response.items.map((item) => {
    return {
      params: { "qna-slug": item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "questionAnswers",
    "fields.slug": params["qna-slug"],
  });

  if (!items.length) {
    return {
      rediect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      qna: items[0],
    },
    revalidate: 1,
  };
}
