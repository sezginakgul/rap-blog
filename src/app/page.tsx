import Trends from "@/components/Trends";
import Favorites from "@/components/Favorites";
import Discover from "@/components/Discover";
import LiveStream from "@/components/LiveStream";
import type { Metadata } from "next";
import { Post } from "@/types";
import mockData from "@/data/mockData.json";
import Slider from "@/components/Slider";

export const metadata: Metadata = {
  title: "Rapkology - Türkçe Rap Kültürü",
  description: "Türkçe rap kültürü, müzik, videolar ve daha fazlası",
};

export default async function Home() {
  const posts: Post[] = mockData.map((item) => ({
    ...item,
    id: item?._id,
  }));

  const mainPost = posts[0];
  if (mainPost?.attributes?.seo) {
    metadata.title = mainPost.attributes.seo.metaTitle;
    metadata.description = mainPost.attributes.seo.metaDescription;
  }

  return (
    <>
      <Slider posts={posts} />

      <LiveStream />

      <Trends posts={posts} />

      <Favorites posts={posts} />

      <Discover posts={posts} />
    </>
  );
}
