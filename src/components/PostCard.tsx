import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: {
    _id: string;
    attributes: {
      title: string;
      slug: string;
      desc: string;
      img: string;
      category: string[];
    };
  };
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-black text-white overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <Link href={`/post/${post.attributes.slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={post.attributes.img}
            alt={post.attributes.title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <div className="flex gap-2 mb-2">
          {post.attributes.category.map((cat, index) => (
            <span
              key={index}
              className="text-xs font-semibold bg-[var(--primary-color)] text-black px-2 py-1"
            >
              {cat}
            </span>
          ))}
        </div>
        <Link href={`/post/${post.attributes.slug}`}>
          <h3 className="text-xl font-bold mb-2 hover:text-[var(--primary-color)] transition-colors">
            {post.attributes.title}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4">{post.attributes.desc}</p>
        <Link
          href={`/post/${post.attributes.slug}`}
          className="inline-block bg-[var(--primary-color)] text-black px-4 py-2 text-sm font-medium hover:bg-[var(--secondary-color)] transition-colors"
        >
          Devamını Oku
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
