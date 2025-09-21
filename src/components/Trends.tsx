"use client";

import ActionButton from "./ui/ActionButton";
import SectionTitle from "./ui/SectionTitle";
import CommonPostCard from "./ui/CommonPostCard";

interface TrendsProps {
  posts: Array<{
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
  }>;
}

const Trends = ({ posts }: TrendsProps) => {
  const trendPosts = posts.slice(0, 6);

  return (
    <section className="py-12 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-10">
          <SectionTitle
            title="TRENDLER"
            icon={
              <svg
                width="56"
                height="33"
                viewBox="0 0 56 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.44636 32.4423L0.493561 29.4895L20.5451 9.50666L32.0129 20.9745L48.5623 4.42511H39.8413V0.304932H55.4293V15.8929H51.3778V7.44657L31.9443 26.8801L20.4764 15.4123L3.44636 32.4423Z"
                  fill="var(--primary-color)"
                />
              </svg>
            }
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {trendPosts.map((post, index) => (
            <CommonPostCard
              key={post._id}
              post={post}
              index={index}
              showIndex={true}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <ActionButton href="/blog" color="#ffffff" textColor="#000000">
            Tümünü Gör
          </ActionButton>
        </div>
      </div>
    </section>
  );
};

export default Trends;
