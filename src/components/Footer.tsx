import Link from "next/link";
import { navItems } from "@/enums/navigation";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between text-sm text-gray-400 mb-4">
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="hover:text-[var(--primary-color)] transition-colors"
            >
              {item.title.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-800">
          © RAPKOLOGY All Rights Are Reserved 2023
        </div>
      </div>
    </footer>
  );
};

export default Footer;
