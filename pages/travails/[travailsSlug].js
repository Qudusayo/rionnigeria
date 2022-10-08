import { createClient } from "contentful";
import moment from "moment";
import Link from "next/link";
import { Card } from "..";
import BlogPost from "../../components/BlogPost/BlogPost";
import GridLayout from "../../components/GridLayout/GridLayout";
import Component from "../../layout/Component/Component";

import styles from "./../../styles/travails.module.scss";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export default function TravailsSlug({ travail }) {
  const { post, author, publishedDate, title } = travail.fields;
  return (
    <Component>
      <BlogPost
        post={post}
        title={title}
        author={author}
        publishedDate={publishedDate}
        sector="Travails of Revertees"
      />
    </Component>
  );
}

export const getStaticPaths = async () => {
  const response = await client.getEntries({
    content_type: "travailsOfRevertes",
  });

  const paths = response.items.map((item) => {
    return {
      params: { travailsSlug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "travailsOfRevertes",
    "fields.slug": params.travailsSlug,
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
      travail: items[0],
    },
    revalidate: 1,
  };
}
