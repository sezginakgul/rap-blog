import BlogListContent from "@/components/BlogListContent";
import BlogHeroSlider from "@/components/BlogHeroSlider";
import mockData from "@/data/mockData.json";
import { Post } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Subscribe from "@/components/ui/Subscribe";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rapkology - Türkçe Rap Kültürü",
  description:
    "Rapkology Blog - Türkçe rap kültürü, müzik, videolar ve daha fazlası",
};

export default async function BlogPage() {
  const posts: Post[] = mockData;

  const mainPost = posts[0];
  if (mainPost?.attributes?.seo) {
    metadata.title = mainPost.attributes.seo.metaTitle;
    metadata.description = mainPost.attributes.seo.metaDescription;
  }

  return (
    <>
      <div className="bg-[var(--primary-color)]">
        <div className="container mx-auto px-4 pt-4">
          <Breadcrumb />

          <h1 className="text-4xl font-bold mb-6 text-black">BLOG</h1>
        </div>

        <div className="container mx-auto px-4">
          <BlogHeroSlider posts={posts} />
        </div>

        <div className="relative w-full">
          <Image
            src="/paper.svg"
            alt="Paper effect"
            width={1920}
            height={100}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      <div className="bg-[#121212] py-8">
        <div className="container mx-auto px-4">
          <BlogListContent posts={posts} />
        </div>
      </div>

      <div className="bg-[#121212] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col items-center md:items-start md:w-1/2">
              <Link href="/" className="mb-6">
                <Image
                  src="/logo.svg"
                  alt="Rapkology"
                  width={180}
                  height={50}
                  className="h-auto"
                />
              </Link>

              <div className="w-full">
                <Subscribe />
              </div>
            </div>

            <div className="w-full md:w-2/5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
