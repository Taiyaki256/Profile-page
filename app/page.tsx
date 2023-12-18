"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaLocationArrow, FaUserGraduate, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow w-full h-full"
      )}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex flex-row w-full h-full">
        <div>
          <Avatar className="ml-4 mt-4 pointer-events-none w-40 h-40">
            <AvatarImage src="https://github.com/Taiyaki256.png" />
            <AvatarFallback>T</AvatarFallback>
          </Avatar>
          <span className={cn("text-3xl font-bold ml-6 mt-2 flex")}>
            Taiyaki
          </span>
          <span className="text-base font-light text-gray-600 ml-6 mb-2 flex">
            @taiyaki256
          </span>
        </div>
        <div
          className={cn(
            "justify-end items-end ml-auto mt-auto mr-4 rounded-xl border bg-card text-card-foreground shadow"
          )}
        >
          <Link
            href="https://twitter.com/tr_taiyaki"
            className="p-0 inline-block"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-2 h-full"
            >
              <FaTwitter className={cn("inline-block mr-2 ml-1")} />
              <span className="mr-2 mt-8 h-full">Twitter</span>
            </motion.div>
          </Link>
        </div>
      </div>
      <Separator />
      <div className={cn("px-4 pt-2 pb-1")}>
        <p className={cn("text-sm")}>
          <FaLocationArrow className={cn("inline-block mr-2")} />
          <span className={cn("inline-block font-normal")}>日本 / Japan</span>
        </p>
      </div>
      <div className={cn("px-4 pb-2 pt-1")}>
        <p className={cn("text-sm")}>
          <FaUserGraduate className={cn("inline-block mr-2")} />
          <span className={cn("inline-block font-normal")}>NITTC Tokyo</span>
        </p>
      </div>
    </motion.div>
  );
}
