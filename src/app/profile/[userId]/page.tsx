import React from "react";
import Image from "next/image";
import { getDetailPosts, getDetailProfile } from "@/snsAPI";
import { PostType, Profile } from "@/types";
import { Metadata } from "next";
import PostUtil from "../../../util/PostUtil";

type Props = {
  profile: Profile;
  posts: PostType[];
};

export async function generateMetadata({ params }: any) {
  const profileData = await getDetailProfile(params?.userId);
  const title = `${profileData.user.username}'s profile`;
  const description = `${profileData.user.username}のプロフィールです。`;
  const tags = ["SNS", "NEXT", "JS"];
  const imgUrl = "/images/";
  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      creator: "sunny park",
      title,
      description,
      images: {
        url: imgUrl || "",
        alt: "Profile Image",
      },
    },
  };
}
// export function generateMetadata({ params: { userId } }: any): Metadata {
//   return PostUtil.getMetadataBySlug(userId);
// }

const Profile = async ({ params }: { params: { userId: number } }) => {
  const profileData = await getDetailProfile(params?.userId);
  const posts = await getDetailPosts(params?.userId);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full max-w-xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          <div className="flex items-center">
            <Image
              className="w-20 h-20 rounded-full mr-4"
              src={profileData.profileImageUrl}
              width={100}
              height={100}
              alt="User Avatar"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-1">
                {profileData.user.username}
              </h2>
              <p className="text-gray-600">{profileData.bio}</p>
            </div>
          </div>
        </div>
        {posts?.map((post: PostType) => (
          <div className="bg-white shadow-md rounded p-4 mb-4" key={post?.id}>
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Image
                  className="w-10 h-10 rounded-full mr-2"
                  src={profileData?.profileImageUrl}
                  width={200}
                  height={200}
                  alt="User Avatar"
                />
                <div>
                  <h2 className="font-semibold text-md">
                    {post?.author.username}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {new Date(post?.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{post?.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
