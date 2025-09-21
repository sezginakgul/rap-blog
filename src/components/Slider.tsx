"use client";

import Image from "next/image";
import ActionButton from "./ui/ActionButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Post } from "@/types";
import { useRouter } from "next/navigation";

interface SliderProps {
  posts: Post[];
}

const Slider = ({ posts }: SliderProps) => {
  const router = useRouter();

  const slides = posts?.map((post) => ({
    id: post._id,
    image: post.attributes.img,
    title: post.attributes.title,
    description: post.attributes.desc,
    link: `/post/${post.attributes.slug}`,
    seo: post.attributes.seo || {
      metaTitle: post.attributes.title,
      metaDescription: post.attributes.desc,
    },
  }));

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-[#121212]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full custom-swiper"
      >
        {slides.slice(0, 3).map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <div
                className="absolute inset-0"
                onClick={() => router.push(slide.link)}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover brightness-50 cursor-pointer"
                />
              </div>

              <div className="container mx-auto h-full flex flex-col justify-center items-end relative z-10">
                <div className="px-6 md:px-8 lg:px-10 text-white max-w-[800px] text-left">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 uppercase">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-base lg:text-lg mb-2 line-clamp-1">
                    {slide.description}
                  </p>

                  <ActionButton
                    href={slide.link}
                    color="bg-[var(--primary-color)]"
                    textColor="#000000"
                    className="relative z-60"
                  >
                    Devamını Oku
                  </ActionButton>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container mx-auto absolute bottom-12 left-0 right-0 z-20">
        <div className="px-6 md:px-8 lg:px-10 flex justify-end">
          <div className="swiper-pagination-custom flex items-center mt-8 justify-end space-x-2"></div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 w-full z-5">
        <Image
          src="/paper.svg"
          alt="Paper effect"
          width={1920}
          height={100}
          className="w-full h-auto object-cover cursor-pointer"
          priority
        />
      </div>
    </div>
  );
};

export default Slider;
