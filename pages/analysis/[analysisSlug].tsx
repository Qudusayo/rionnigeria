import { GetStaticPaths } from "next";
import { createClient } from "contentful";
import BlogPost from "../../components/BlogPost/BlogPost";
import Component from "../../layout/Component/Component";
import { TypeAnalysis, TypeAnalysisFields } from "../../types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function AnalysisSlug({ analysis }: { analysis: TypeAnalysis }) {
  if (!analysis) return;

  const { post, author, publishedDate, title } = analysis.fields;
  return (
    <Component>
      <BlogPost post={post} title={title} author={author} publishedDate={publishedDate} sector="Analysis" />
    </Component>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await client.getEntries<TypeAnalysisFields>({
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

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries<TypeAnalysisFields>({
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
};
