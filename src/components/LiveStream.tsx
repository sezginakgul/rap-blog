"use client";

import Image from "next/image";
import Link from "next/link";

const LiveStream = () => {
  return (
    <section className="py-12 bg-[#121212] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/paper.svg"
          alt="Paper effect"
          fill
          className="z-5 transform -rotate-180 -mt-50"
        />
      </div>
      <div className="container mx-auto px-4">
        <div className="relative">
          <div className="flex justify-center mb-8 relative z-30">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Image
                  src="/twitch.svg"
                  alt="Twitch"
                  width={350}
                  height={350}
                  className="align-middle mt-3 transform hover:scale-105 transition-transform duration-300"
                />
                <div className="border-l-2 border-[#3B3B3B] h-38 pl-6 text-start transform -rotate-4">
                  <h2 className="text-4xl md:text-6xl uppercase font-extrabold">
                    HER HAFTA <br />
                    <span className="text-[var(--primary-color)] font-bold">
                      CANLIDAYIZ!
                    </span>
                  </h2>
                  <p className="text-sm mt-2 text-gray-300">Bizi Takip Edin!</p>
                </div>
              </div>

              <div className="inline-flex space-x-6 mx-auto relative z-30 transform -rotate-4 border-2 border-[#2A2A2A] p-2 rounded-xl">
                <Link
                  href="https://www.twitch.tv/rapkology"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-purple-700 transition-all duration-300 hover:shadow-lg font-medium"
                >
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M17.0412 8.22857L10.7489 15.467L3.51016 9.17447C1.82941 7.71342 1.65119 5.16653 3.11208 3.48564C4.57317 1.80451 7.12049 1.62625 8.80148 3.08751L9.95328 4.08876L10.9537 2.93748C12.4148 1.25626 14.9622 1.07796 16.6432 2.53926L16.6434 2.53943C18.3243 4.00059 18.5024 6.5477 17.0412 8.22857Z"
                      stroke="white"
                      strokeWidth="2.34353"
                    />
                  </svg>
                  <span>Takip Et</span>
                </Link>
                <Link
                  href="https://www.twitch.tv/rapkology/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#222123] text-white px-4 py-2 rounded-lg flex items-center hover:bg-gray-800 transition-all duration-300 hover:shadow-lg font-medium border border-[#222123]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                  <span>Abone Ol</span>

                  <svg
                    width="13"
                    height="9"
                    viewBox="0 0 13 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      d="M11.9097 0.929966L7.14907 6.40643L1.67261 1.64581"
                      stroke="white"
                      strokeWidth={2.34353}
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex relative z-20">
            <div className="w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/man.svg"
                  alt="Rapkology Yayıncı 1"
                  fill
                  className="object-contain object-left-bottom transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
            <div className="w-1/2">
              <div className="relative h-96 w-full">
                <Image
                  src="/women.svg"
                  alt="Rapkology Yayıncı 2"
                  fill
                  className="object-contain object-right-bottom transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Image
          src="/paper.svg"
          alt="Paper effect"
          width={1920}
          height={100}
          className="w-full h-auto fill-amber-200"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/concert.svg"
          alt="Concert crowd"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>
    </section>
  );
};

export default LiveStream;
