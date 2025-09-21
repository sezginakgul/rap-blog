"use client";

import Link from "next/link";
import Image from "next/image";

interface PostType {
  _id: string;
  user_id?: string;
  type?: string;
  attributes: {
    title: string;
    slug: string;
    desc: string;
    img: string;
    category: string[];
    trends?: boolean;
    authors?: string[];
  };
  lang?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface CommonPostCardProps {
  post: PostType;
  index?: number;
  showIndex?: boolean;
}

const CommonPostCard = ({
  post,
  index,
  showIndex = false,
}: CommonPostCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4">
        {showIndex && index !== undefined && (
          <span className="text-4xl font-bold text-gray-700 mr-4 opacity-80">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="w-10 h-10 rounded-[10px] overflow-hidden relative">
          <Image
            src={
              post.attributes.img ||
              "https://res.cloudinary.com/dgbjlgpfh/image/upload/v1756449589/softawe/lark.jpg.webp"
            }
            alt={post.attributes.authors?.[0] || "Author"}
            fill
            className="object-cover"
          />
        </div>
        <span className="ml-2 text-md">{post.attributes.authors?.[0]}</span>
      </div>

      <Link href={`/post/${post.attributes.slug}`}>
        <h3 className="text-lg font-bold uppercase hover:text-[var(--primary-color)] transition-colors">
          {post.attributes.title}
        </h3>
      </Link>

      <div className="border-b border-[#3B3B3B] mb-3 mt-4"></div>

      <Link
        href={`/post/${post.attributes.slug}`}
        className="text-sm text-gray-400 mt-2 hover:text-[var(--primary-color)] transition-colors flex items-center"
      >
        Daha Fazla Oku
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

export default CommonPostCard;
