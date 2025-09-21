"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/enums/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="RAPKOLOGY"
              width={120}
              height={40}
              priority
            />
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--primary-color)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-[var(--primary-color)] transition-colors font-medium uppercase"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-[var(--primary-color)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <Link
              href="/giris"
              className="bg-white text-black px-4 py-2 text-sm font-medium uppercase hover:bg-[var(--primary-color)] transition-colors"
            >
              Giriş Yap
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block hover:text-[var(--primary-color)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="block hover:text-[var(--primary-color)] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
