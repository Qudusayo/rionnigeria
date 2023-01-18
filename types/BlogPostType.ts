import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface BlogPostType {
  sector: string;
  title: Contentful.EntryFields.Symbol;
  author: Contentful.EntryFields.Symbol;
  publishedDate: Contentful.EntryFields.Date;
  post: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}
