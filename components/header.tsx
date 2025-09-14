"use client";

import Link from "next/link";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">Taiyaki</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">
              Portfolio
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <IoSunnyOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <IoMoonOutline className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
