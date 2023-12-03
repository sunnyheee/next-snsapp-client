import { notFound } from "next/navigation";

export const getDetailProfile = async (userId: number) => {
  const res = await fetch(
    `https://next-sns-api-pj5d.onrender.com/api/users/profile/${userId}`,
    {
      cache: "no-store",
    }
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
  }

  await new Promise((reslove) => setTimeout(reslove, 1000));

  const profile = await res.json();
  return profile;
};

export const getDetailPosts = async (userId: number) => {
  const res = await fetch(
    `https://next-sns-api-pj5d.onrender.com/api/posts/${userId}`,
    {
      // cache: "no-store",
      next: { revalidate: 60 },
    }
  ); //ISR

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
  }

  await new Promise((reslove) => setTimeout(reslove, 1000));

  const profile = await res.json();
  return profile;
};
