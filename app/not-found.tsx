"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-9xl font-bold">
        4<span className="text-6xl">🐟</span>4
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        Oops! The page you are looking for does not exist.
      </p>
      <div className="mt-8">
        <Link href="/">
          <Button>Go back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
