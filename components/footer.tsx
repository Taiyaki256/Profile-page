"use client";

import Link from "next/link";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 mt-24 border-t">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Taiyaki. All Rights Reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link href="https://twitter.com/tr_taiyaki" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://github.com/Taiyaki256" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white">
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
