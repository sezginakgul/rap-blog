import BlogHeader from "@/components/BlogHeader";
import BlogContent from "@/components/BlogContent";
import { notFound } from "next/navigation";
import { Post } from "@/types";
import mockData from "@/data/mockData.json";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = params;
  const posts = await import("@/data/mockData.json").then((m) => m.default);
  const post = posts.find((p: Post) => {
    const normalizedPostSlug = p.attributes.slug
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const normalizedParamSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      normalizedPostSlug === normalizedParamSlug || p.attributes.slug === slug
    );
  });

  if (!post) {
    return {
      title: "İçerik Bulunamadı",
    };
  }

  return {
    title: post.attributes.seo.metaTitle,
    description: post.attributes.seo.metaDescription,
    canonical: post.attributes.seo.canonicalURL,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const posts: Post[] = mockData;

  const post = posts.find((p: Post) => {
    const normalizedPostSlug = p.attributes.slug
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");
    const normalizedParamSlug = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      normalizedPostSlug === normalizedParamSlug || p.attributes.slug === slug
    );
  });

  const relatedPosts = post
    ? posts.filter(
        (p: Post) =>
          p._id !== post._id &&
          p.attributes.category.some((cat: string) =>
            post.attributes.category.includes(cat)
          )
      )
    : [];

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { label: "BLOG", href: "/blog" },
    {
      label: post.attributes.category[0] || "KATEGORİ",
      href: `/category/${
        post.attributes.category[0]?.toLowerCase().replace(/\s+/g, "-") ||
        "kategori"
      }`,
    },
  ];

  return (
    <>
      <BlogHeader breadcrumbs={breadcrumbs} />

      <BlogContent post={post} relatedPosts={relatedPosts.slice(0, 4)} />
    </>
  );
}
