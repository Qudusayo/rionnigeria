import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeTravailsOfRevertesFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  publishedDate: Contentful.EntryFields.Date;
  thumbnail: Contentful.Asset;
  author: Contentful.EntryFields.Symbol;
  featuredImage?: Contentful.Asset;
  post: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeTravailsOfRevertes =
  Contentful.Entry<TypeTravailsOfRevertesFields>;
