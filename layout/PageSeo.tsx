import React from "react";
import HeadSeo from "../components/HeadSeo/HeadSeo";
import siteMetadata from "../data/siteMetadata";

export default function PageSeo({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <HeadSeo
        title={`${siteMetadata.companyName} | ${title}`}
        ogType={"article"}
      />
      {children}
    </>
  );
}
