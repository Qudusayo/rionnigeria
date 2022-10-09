import { createClient } from "contentful";
import BlogPost from "../../components/BlogPost/BlogPost";
import Component from "../../layout/Component/Component";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function AnalysisSlug({ analysis }) {
  if (!analysis) return;

  const { post, author, publishedDate, title } = analysis.fields;
  return (
    <Component>
      <BlogPost
        post={post}
        title={title}
        author={author}
        publishedDate={publishedDate}
        sector="Analysis"
      />
    </Component>
  );
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "analysis",
  });

  const paths = response.items.map((item) => {
    return {
      params: { analysisSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "analysis",
    "fields.slug": params.analysisSlug,
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
      analysis: items[0],
    },
    revalidate: 1,
  };
}
