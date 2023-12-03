import { notFound } from "next/navigation";

export const getDetailProfile = async (userId: number) => {
  const res = await fetch(
    `http://localhost:10000/api/users/profile/${userId}`,
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
  const res = await fetch(`http://localhost:10000/api/posts/${userId}`, {
    cache: "no-store",
  });

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
  }

  await new Promise((reslove) => setTimeout(reslove, 1000));

  const profile = await res.json();
  return profile;
};
