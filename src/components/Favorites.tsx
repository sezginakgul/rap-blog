"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Post } from "@/types";
import Link from "next/link";

interface FavoritesProps {
  posts: Post[];
}

const Favorites = ({ posts }: FavoritesProps) => {
  const filteredPosts = posts
    .filter((post) => post.attributes.tags.includes("Ayın Videoları"))
    .slice(0, 10);

  return (
    <section className="py-12 bg-[#121212] text-white relative">
      <div className="container mx-auto px-4 pt-6">
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start gap-6">
            <div className="flex flex-col w-sm md:w-xl">
              <div
                className="bg-white text-black p-6 flex items-center justify-around w-full mb-4 relative"
                style={{
                  clipPath: "polygon(90% 80%, 100% 0%, 0% 0%, 0% 100%)",
                }}
              >
                <div className="relative w-20 sm:w-28 md:w-36 lg:w-40 h-6 sm:h-8 md:h-10 flex-shrink-0">
                  <Image
                    src="/youtube.svg"
                    alt="YouTube"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-20 sm:w-28 md:w-36 lg:w-40 h-6 sm:h-8 md:h-10 flex-shrink-0">
                  <Image
                    src="/spotify.svg"
                    alt="Spotify"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h2 className="text-6xl font-bold uppercase mb-6">
                AYIN <br />
                FAVORİLERİ
              </h2>
            </div>

            <div className="flex-1">
              <div className="w-full sm:max-w-[700px] md:w-[720px] xl:mx-auto xl:w-[800px] h-[200px] md:h-[260px] lg:h-[320px]">
                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={8}
                  slidesPerView={3}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  direction="horizontal"
                  className="h-full"
                >
                  {filteredPosts.map((post, index) => (
                    <SwiperSlide key={post._id}>
                      <Link href={`/post/${post.attributes.slug}`}>
                        <div className="bg-[#1A1A1A] group h-full relative overflow-hidden rounded-md">
                          <Image
                            src={post.attributes.img}
                            alt={post.attributes.title}
                            fill
                            className="object-cover transform -translate-x-1/2 -rotate-45 scale-125 origin-center group-hover:translate-x-0 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-700 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
                              <div className="text-xs font-semibold bg-[#323232] text-white px-2 py-1 rounded-full inline-block">
                                Top 10 ({index + 1}. Sıra)
                              </div>
                              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide leading-tight">
                                {"Lorem"}
                              </h3>
                              {post.attributes.authors &&
                                post.attributes.authors.length > 0 && (
                                  <p className="mt-2 text-sm uppercase text-[var(--primary-color)] font-semibold">
                                    {post.attributes.authors[0]}
                                  </p>
                                )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Favorites;
