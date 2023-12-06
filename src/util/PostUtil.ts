import { getDetailProfile } from "@/snsAPI";
import { Metadata } from "next";

const getMetadataBySlug = ({ userId }: any): Metadata => {
  const title = "プロフィール";
  const description = "SNSのプロフィールです。";
  const tags = ["SNS", "NEXT"];
  const flattenedPath = "/profile";
  const imgUrl = "/images/";
  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      title,
      description,
      url: `/${flattenedPath}`,
      siteName: "Next SNS",
      images: {
        url: imgUrl || "",
        alt: "Post Image",
      },
      locale: "ja_JP",
      type: "article",
      tags,
    },
    twitter: {
      card: "summary_large_image",
      creator: "yunjeoming",
      title,
      description,
      images: {
        url: imgUrl || "",
        alt: "Post Image",
      },
    },
  };
};

const PostUtil = {
  getMetadataBySlug,
};

export default PostUtil;
