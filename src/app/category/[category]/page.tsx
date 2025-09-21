import BlogHeader from "@/components/BlogHeader";
import Discover from "@/components/Discover";
import { Post } from "@/types";
import mockData from "@/data/mockData.json";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = params;
  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${formattedCategory} - Rapkology`,
    description: `${formattedCategory} kategorisindeki Türkçe rap içerikleri`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const posts: Post[] = mockData;

  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const filteredPosts = posts.filter((post: Post) =>
    post.attributes.category.some((cat: string) => {
      const normalizedCategory = cat.toLowerCase().replace(/[^a-z0-9]/g, "");
      const normalizedParam = category
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .replace(/-/g, "");
      return (
        normalizedCategory.includes(normalizedParam) ||
        normalizedParam.includes(normalizedCategory)
      );
    })
  );

  const breadcrumbs = [
    { label: "BLOG", href: "/blog" },
    { label: formattedCategory.toUpperCase(), href: `/category/${category}` },
  ];

  return (
    <>
      <BlogHeader
        title={formattedCategory.toUpperCase()}
        breadcrumbs={breadcrumbs}
      />

      <div className="bg-black py-12">
        <div className="container mx-auto px-4">
          <Discover posts={filteredPosts.length > 0 ? filteredPosts : posts} />
        </div>
      </div>
    </>
  );
}
