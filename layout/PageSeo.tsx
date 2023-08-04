import React from "react";
import HeadSeo from "../components/HeadSeo/HeadSeo";
import siteMetadata from "../data/siteMetadata";

export default function PageSeo({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <HeadSeo title={`${siteMetadata.companyName} | ${title}`} description={description} ogType={"article"} />
      {children}
    </>
  );
}
