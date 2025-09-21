"use client";

import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types";
import Subscribe from "./ui/Subscribe";
import Footer from "./Footer";
import Trends from "./Trends";
import SectionTitle from "./ui/SectionTitle";

interface BlogContentProps {
  post: Post;
  relatedPosts: Post[];
}

const BlogContent = ({ post, relatedPosts }: BlogContentProps) => {
  return (
    <div className="bg-[#121212] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <h1 className="text-4xl md:text-5xl font-bold uppercase mb-6">
              {post.attributes.title}
            </h1>

            <div className="flex items-center mb-8 border-b border-gray-800 pb-4">
              <div className="flex items-center">
                <svg
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.73242 8.08203C1.73242 8.08203 4.95642 1.63403 10.5984 1.63403C16.2404 1.63403 19.4644 8.08203 19.4644 8.08203C19.4644 8.08203 16.2404 14.53 10.5984 14.53C4.95642 14.53 1.73242 8.08203 1.73242 8.08203Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5984 10.5C11.9338 10.5 13.0164 9.41746 13.0164 8.08203C13.0164 6.74661 11.9338 5.66403 10.5984 5.66403C9.263 5.66403 8.18042 6.74661 8.18042 8.08203C8.18042 9.41746 9.263 10.5 10.5984 10.5Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="font-medium ml-3">12.084</div>
              </div>
            </div>
            <p className="text-2xl font-medium mb-6">{post.attributes.desc}</p>
            <div className="relative h-96 w-full mb-8">
              <Image
                src={post.attributes.img}
                alt={post.attributes.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl font-medium mb-6">
                {post.attributes.content}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 my-8">
              {post.attributes.tags.map((tag, index) => (
                <div
                  key={index}
                  className="bg-[#1A1A1A] text-sm px-3 py-1 hover:bg-[var(--primary-color)] hover:text-black transition-colors"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex items-center mb-8 pb-4">
              <div className="flex items-center">
                <svg
                  width="28"
                  height="24"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2961 2.87156L13.8677 3.48945L14.4856 2.87259C16.2105 1.19143 18.5997 0.426275 20.9476 0.817089C24.4953 1.4082 27.0956 4.47807 27.0956 8.07726V8.37591C27.0956 10.5128 26.21 12.5569 24.6447 14.0141L15.3403 22.7006C14.9541 23.061 14.4444 23.2618 13.914 23.2618C13.3837 23.2618 12.8739 23.061 12.4877 22.7006L3.18286 14.0141C1.6196 12.5569 0.732422 10.5128 0.732422 8.37591V8.07726C0.732422 4.47807 3.33373 1.4082 6.8804 0.817089C9.18203 0.426275 11.6175 1.19143 13.2961 2.87156C13.2961 2.87208 13.2498 2.87156 13.2961 2.87156ZM13.8677 6.98566L11.5506 4.5759C10.4333 3.50387 8.84734 2.99514 7.28717 3.25465C4.93148 3.64753 3.20397 5.6881 3.20397 8.07726V8.37591C3.20397 9.82794 3.80693 11.2182 4.86918 12.2068L13.914 20.6513L22.9609 12.2068C24.0216 11.2182 24.6241 9.82794 24.6241 8.37591V8.07726C24.6241 5.6881 22.894 3.64753 20.5409 3.25465C18.9807 2.99514 17.3948 3.50387 16.2774 4.5759L13.8677 6.98566Z"
                    fill="white"
                  />
                </svg>
                <div className="font-medium ml-3">
                  <span className="font-bold">12 Kişi</span> Beğendi
                </div>
              </div>
              <div className="flex items-center ml-4">
                <svg
                  width="26"
                  height="24"
                  viewBox="0 0 26 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9614 0.716797C5.85515 0.716797 0.0971166 5.39568 0.0971166 11.1702C0.0971166 13.5639 1.09772 15.7561 2.75619 17.5125C2.00837 19.4977 0.450923 21.1752 0.425795 21.1938C0.0928448 21.5456 0.00489576 22.0608 0.193358 22.5005C0.388142 22.9403 0.818439 23.2317 1.30191 23.2317C4.39269 23.2317 6.7849 21.9376 8.2926 20.9074C9.69978 21.3622 11.318 21.6235 12.9614 21.6235C20.0677 21.6235 25.7819 16.9431 25.7819 11.1702C25.7819 5.39719 20.0677 0.716797 12.9614 0.716797ZM12.9665 19.2112C11.6221 19.2112 10.2968 19.0039 9.02735 18.6021L7.88401 18.244L6.90401 18.9351C6.18785 19.4437 5.20132 20.0095 4.01425 20.3925C4.3849 19.7834 4.73644 19.0984 5.01336 18.3697L5.54708 16.9625L4.51079 15.8634C3.60466 14.8942 2.51158 13.291 2.51158 11.1702C2.51158 6.73502 7.19801 3.12911 12.965 3.12911C18.7319 3.12911 23.4183 6.73502 23.4183 11.1702C23.4183 15.6053 18.7309 19.2112 12.9665 19.2112Z"
                    fill="white"
                  />
                </svg>
                <div className="ml-2 font-bold">3</div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800">
              <SectionTitle title="DAHA FAZLA İÇERİK" icon={null} />
              <div className="space-y-4 mt-3">
                {relatedPosts.slice(0, 3).map((relatedPost) => (
                  <div key={relatedPost._id} className="group">
                    <Link
                      href={`/post/${relatedPost.attributes.slug}`}
                      className="flex items-center gap-4 hover:bg-[#1A1A1A] p-2 transition-colors"
                    >
                      <div className="relative w-30 h-28 flex-shrink-0 overflow-hidden">
                        <Image
                          src={relatedPost.attributes.img}
                          alt={relatedPost.attributes.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-4xl font-bold capitalize line-clamp-2 group-hover:text-[var(--primary-color)] transition-colors">
                        {relatedPost.attributes.title}
                      </h3>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <Trends posts={relatedPosts} />
          </div>

          <div className="lg:w-1/4">
            <div className=" mb-8">
              <Subscribe />
            </div>

            <div className="mb-8">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
