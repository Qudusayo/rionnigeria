import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeQuestionAnswersFields {
  question: Contentful.EntryFields.Text;
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  publishedDate: Contentful.EntryFields.Date;
  author: Contentful.EntryFields.Symbol;
  thumbnail: Contentful.Asset;
  featuredImage?: Contentful.Asset;
  post: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeQuestionAnswers = Contentful.Entry<TypeQuestionAnswersFields>;
