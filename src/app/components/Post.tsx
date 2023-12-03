import Link from "next/link";
import Image from "next/image";
import { PostType } from "@/types";

type Props = {
  post: PostType;
};

const Post = (props: Props) => {
  const { post } = props;

  return (
    <div className="container mx-auto bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Link href="/">
            <Image src="/" width={0} height={0} alt="" />
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
