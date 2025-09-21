"use client";

import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface BlogHeroSliderProps {
  posts: Post[];
}

const BlogHeroSlider = ({ posts }: BlogHeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying] = useState(true);
  const featuredPosts = posts.slice(0, 5);
  const smallPosts = featuredPosts.slice(1);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
  }, [featuredPosts.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, nextSlide]);

  return (
    <div className="bg-[var(--primary-color)] p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-2/3">
          <div className="relative">
            <div className="w-full aspect-[16/9] relative mb-4">
              <Image
                src={featuredPosts[currentSlide]?.attributes.img}
                alt={featuredPosts[currentSlide]?.attributes.title}
                fill
                className="object-cover"
              />

              <div className="absolute bottom-7 right-7 bg-transparent rounded-full p-2">
                <svg
                  width="65"
                  height="65"
                  viewBox="0 0 65 65"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <foreignObject x="-30" y="-30" width="125" height="125">
                    <div
                      style={{
                        backdropFilter: "blur(15px)",
                        clipPath: "url(#bgblur_0_1_625_clip_path)",
                        height: "100%",
                        width: "100%",
                      }}
                    ></div>
                  </foreignObject>
                  <g data-figma-bg-blur-radius="30">
                    <rect
                      width="65"
                      height="65"
                      rx="32.5"
                      fill="#CBCBCB"
                      fillOpacity="0.08"
                    />
                    <circle
                      cx="32.4998"
                      cy="32.4998"
                      r="26.0916"
                      stroke="var(--primary-color)"
                      strokeWidth="3"
                    />
                    <path
                      d="M26.2078 24.7861C26.2078 22.057 29.4118 20.5875 31.4801 22.3681L40.4406 30.0819C41.9193 31.3549 41.9193 33.6451 40.4406 34.9181L31.4801 42.6319C29.4118 44.4125 26.2078 42.943 26.2078 40.2139V24.7861Z"
                      fill="var(--primary-color)"
                    />
                  </g>
                  <defs>
                    <clipPath
                      id="bgblur_0_1_625_clip_path"
                      transform="translate(30 30)"
                    >
                      <rect width="65" height="65" rx="32.5" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="absolute bottom-12 left-12 text-2xl font-bold text-[#fff] uppercase line-clamp-1 mr-23">
                {featuredPosts[currentSlide]?.attributes.title}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <p className="text-black text-lg font-bold uppercase line-clamp-1">
                {featuredPosts[currentSlide]?.attributes.desc}
                ...
              </p>

              <div className="flex space-x-2">
                {featuredPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentSlide === index ? "bg-black" : "bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar with recent posts - Right side */}
        <div className="w-full md:w-1/3 flex flex-col space-y-4">
          {smallPosts.map((post) => (
            <div
              key={post._id}
              className="flex items-start space-x-3 hover:bg-black/10 p-2 transition-colors h-1/4"
            >
              <Link
                href={`/post/${post.attributes.slug}`}
                className="flex items-start space-x-3 w-full"
              >
                {/* Thumbnail image */}
                <div className="relative w-35 h-30 flex-shrink-0">
                  <Image
                    src={post.attributes.img}
                    alt={post.attributes.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold uppercase text-black line-clamp-2">
                    {post.attributes.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSlider;
