import Link from "next/link";
import Image from "next/image";
import { PostType } from "@/types";
import { profile } from "console";

type Props = {
  post: PostType;
};

const Post = (props: Props) => {
  const { post } = props;

  return (
    <div className="container mx-auto bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Link href={`/profile/${post.authorId}`}>
            <Image
              src={post.author.profile?.profileImageUrl}
              width={100}
              height={100}
              className="w-10 h-10 rounded-full mr-2"
              alt=""
            />
          </Link>
          <div>
            <h2 className="font-semibold text-md text-black">
              {post.author?.username}
            </h2>
            <p className="text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default Post;
