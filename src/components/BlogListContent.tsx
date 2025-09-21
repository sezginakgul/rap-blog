"use client";

import { Post } from "@/types";
import Image from "next/image";
import ActionButton from "./ui/ActionButton";
import CommonPostCard from "./ui/CommonPostCard";
import LayoutButtons, { ViewMode } from "./ui/LayoutButtons";
import SectionTitle from "./ui/SectionTitle";
import { useState } from "react";
import { FilterId, FILTERS } from "@/enums/filters";

interface BlogListContentProps {
  posts: Post[];
}

const BlogListContent = ({ posts }: BlogListContentProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterId>(FilterId.ALL);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [postsToShow, setPostsToShow] = useState(6);

  const filteredPosts =
    activeFilter === FilterId.ALL
      ? posts
      : posts.filter((post) => {
          const activeFilterItem = FILTERS.find(
            (filter) => filter.id === activeFilter
          );
          if (!activeFilterItem) return false;
          return post.attributes.category.some((cat) =>
            cat.toLowerCase().includes(activeFilterItem.slug.toLowerCase())
          );
        });

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col space-y-6 mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SectionTitle
              title="KEŞFET"
              icon={
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 54 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3849 42.5032L31.907 32.8768L41.5334 13.3547L22.0113 22.9811L12.3849 42.5032ZM26.9928 30.588C26.2299 30.588 25.5904 30.3299 25.0743 29.8138C24.5582 29.2977 24.3001 28.6582 24.3001 27.8953C24.3001 27.1323 24.5582 26.4928 25.0743 25.9767C25.5904 25.4606 26.2299 25.2026 26.9928 25.2026C27.7558 25.2026 28.3953 25.4606 28.9114 25.9767C29.4275 26.4928 29.6855 27.1323 29.6855 27.8953C29.6855 28.6582 29.4275 29.2977 28.9114 29.8138C28.3953 30.3299 27.7558 30.588 26.9928 30.588ZM26.9928 54.8223C23.3128 54.8223 19.8347 54.1154 16.5586 52.7018C13.2825 51.2881 10.4215 49.3583 7.97563 46.9125C5.52976 44.4666 3.6 41.6056 2.18633 38.3295C0.77266 35.0534 0.0658264 31.5753 0.0658264 27.8953C0.0658264 24.1704 0.77266 20.6699 2.18633 17.3937C3.6 14.1176 5.52976 11.2678 7.97563 8.84441C10.4215 6.42098 13.2825 4.50243 16.5586 3.08876C19.8347 1.6751 23.3128 0.968262 26.9928 0.968262C30.7177 0.968262 34.2182 1.6751 37.4944 3.08876C40.7705 4.50243 43.6203 6.42098 46.0437 8.84441C48.4671 11.2678 50.3857 14.1176 51.7993 17.3937C53.213 20.6699 53.9198 24.1704 53.9198 27.8953C53.9198 31.5753 53.213 35.0534 51.7993 38.3295C50.3857 41.6056 48.4671 44.4666 46.0437 46.9125C43.6203 49.3583 40.7705 51.2881 37.4944 52.7018C34.2182 54.1154 30.7177 54.8223 26.9928 54.8223ZM26.9928 50.7832C33.3656 50.7832 38.7734 48.5505 43.2163 44.0851C47.6593 39.6197 49.8808 34.2231 49.8808 27.8953C49.8808 21.5225 47.6593 16.1147 43.2163 11.6717C38.7734 7.22879 33.3656 5.00731 26.9928 5.00731C20.665 5.00731 15.2684 7.22879 10.803 11.6717C6.33757 16.1147 4.10488 21.5225 4.10488 27.8953C4.10488 34.2231 6.33757 39.6197 10.803 44.0851C15.2684 48.5505 20.665 50.7832 26.9928 50.7832Z"
                    fill="var(--primary-color)"
                  />
                </svg>
              }
            />
          </div>

          <LayoutButtons
            viewMode={viewMode as ViewMode}
            setViewMode={(mode) => setViewMode(mode)}
          />
        </div>

        <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 no-scrollbar ">
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                activeFilter === filter.id
                  ? "bg-[var(--primary-color)] text-black"
                  : "bg-[#1A1A1A] b[var(--primary-color)]]"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div
            className={`grid ${
              viewMode === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
            } gap-6`}
          >
            {filteredPosts?.length > 0 ? (
              filteredPosts.slice(0, postsToShow).map((post) => (
                <div
                  key={post._id}
                  className="bg-transparent group rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/3">
                      <div className="relative h-48 overflow-hidden rounded-lg">
                        <Image
                          src={post.attributes.img}
                          alt={post.attributes.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="mt-2">
                        <div className="text-xs text-gray-300">
                          {post.createdAt
                            ? new Date(post.createdAt).toLocaleDateString(
                                "tr-TR",
                                {
                                  day: "2-digit",
                                  month: "long",
                                  year: "numeric",
                                }
                              )
                            : "29 Ağustos 2025"}
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-2/3">
                      <CommonPostCard post={post} showIndex={false} />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-white">
                Bu kategoride gönderi bulunamadı.
              </div>
            )}
          </div>
        </div>
      </div>
      {filteredPosts?.length > 0 && postsToShow < filteredPosts.length && (
        <div className="flex justify-center mt-8 ">
          <ActionButton
            action={() => {
              setPostsToShow((prev) => prev + 6);
            }}
            color="#ffffff"
            textColor="#000000"
          >
            Daha Fazla Gör
          </ActionButton>
        </div>
      )}
    </div>
  );
};

export default BlogListContent;
