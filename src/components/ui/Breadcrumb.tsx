"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  customClassName?: string;
  textColor?: "white" | "black";
}

const Breadcrumb = ({
  items = [],
  customClassName = "",
  textColor = "black",
}: BreadcrumbProps) => {
  const pathname = usePathname();

  const breadcrumbItems =
    items.length > 0 ? items : generateBreadcrumbs(pathname);

  return (
    <div
      className={`flex items-center text-${textColor} text-sm mb-4 ${customClassName}`}
    >
      <Link href="/" className={`hover:opacity-80 transition-opacity`}>
        ANA SAYFA
      </Link>

      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center">
          <span className="mx-2">&gt;</span>
          {index === breadcrumbItems.length - 1 ? (
            <span className="font-bold uppercase">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className={`hover:opacity-80 transition-opacity uppercase`}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

function generateBreadcrumbs(path: string): BreadcrumbItem[] {
  if (path === "/") return [];

  const segments = path.split("/").filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;

    let label: string;

    if (segments[index - 1] === "category") {
      label = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else if (segments[index - 1] === "post") {
      label = "BLOG POST";
    } else {
      label = segment.toUpperCase();
    }

    breadcrumbs.push({ label, href });
  });

  return breadcrumbs;
}

export default Breadcrumb;
