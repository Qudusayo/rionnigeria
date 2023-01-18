import { createClient } from "contentful";
import BlogPost from "../../components/BlogPost/BlogPost";
import Component from "../../layout/Component/Component";
import { TypeRebuttal, TypeRebuttalFields } from "../../types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function RebutalsSlug({ rebuttal }: { rebuttal: TypeRebuttal }) {
  if (!rebuttal) return;

  const { post, author, publishedDate, title } = rebuttal.fields;
  return (
    <Component>
      <BlogPost
        post={post}
        title={title}
        author={author}
        publishedDate={publishedDate}
        sector="Rebuttals"
      />
    </Component>
  );
}

export const getStaticPaths = async () => {
  const response = await client.getEntries<TypeRebuttalFields>({
    content_type: "rebuttal",
  });

  const paths = response.items.map((item) => {
    return {
      params: { rebuttalsSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries<TypeRebuttalFields>({
    content_type: "rebuttal",
    "fields.slug": params.rebuttalsSlug,
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
      rebuttal: items[0],
    },
    revalidate: 1,
  };
}
