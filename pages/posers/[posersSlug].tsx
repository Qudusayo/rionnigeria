import { createClient } from "contentful";
import BlogPost from "../../components/BlogPost/BlogPost";
import Component from "../../layout/Component/Component";
import { TypePoser, TypePoserFields } from "../../types";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function PosersSlug({ poser }: { poser: TypePoser }) {
  if (!poser) return;

  const { post, author, publishedDate, title } = poser.fields;
  return (
    <Component>
      <BlogPost post={post} title={title} author={author} publishedDate={publishedDate} sector="Posers" />
    </Component>
  );
}

export const getStaticPaths = async () => {
  const response = await client.getEntries<TypePoserFields>({
    content_type: "poser",
  });

  const paths = response.items.map((item) => {
    return {
      params: { posersSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries<TypePoserFields>({
    content_type: "poser",
    "fields.slug": params.posersSlug,
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
      poser: items[0],
    },
    revalidate: 1,
  };
}
