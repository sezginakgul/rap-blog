"use client";

import Breadcrumb from "./ui/Breadcrumb";

interface BlogHeaderProps {
  title?: string;
  breadcrumbs?: Array<{
    label: string;
    href: string;
  }>;
}

const BlogHeader = ({ title, breadcrumbs }: BlogHeaderProps) => {
  return (
    <div
      className={`${
        title ? "bg-[var(--primary-color)]" : "bg-[var(--secondary-color)]"
      } py-6 relative`}
    >
      <div className="container mx-auto px-4">
        <Breadcrumb items={breadcrumbs} textColor={title ? "black" : "white"} />

        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-black uppercase">
            {title}
          </h1>
        )}
      </div>
    </div>
  );
};

export default BlogHeader;
