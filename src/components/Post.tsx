import Link from "next/link";
import Image from "next/image";

const Post = () => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <Link href="/">
            <Image src="/" width={0} height={0} alt="" />
          </Link>
          <div>
            <h2 className="font-semibold text-md text-black">username</h2>
            <p className="text-gray-500 text-sm">createdAt</p>
          </div>
        </div>
        <p className="text-gray-700">content</p>
      </div>
    </div>
  );
};

export default Post;
