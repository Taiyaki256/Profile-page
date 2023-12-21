"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  FaLocationArrow,
  FaUserGraduate,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, staggerChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <>
      <motion.div
        className={cn(
          "rounded-xl border bg-card text-card-foreground shadow w-full h-full box-border"
        )}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex flex-row w-full h-full flex-wrap">
          <div>
            <Avatar className="ml-4 mt-4 pointer-events-none w-40 h-40">
              <AvatarImage src="https://github.com/Taiyaki256.png" />
              <AvatarFallback>Taiyaki</AvatarFallback>
            </Avatar>
            <span className={cn("text-3xl font-bold ml-6 mt-2 flex")}>
              Taiyaki
            </span>
            <span className="text-base font-light text-gray-600 ml-6 mb-2 flex">
              @taiyaki256
            </span>
          </div>
          <div className="flex ml-auto mt-auto h-full">
            <motion.div
              variants={item}
              className={cn(
                "inline-block justify-end items-end mr-4 mb-2 rounded-xl border bg-card text-card-foreground shadow"
              )}
            >
              <Link
                href="https://twitter.com/tr_taiyaki"
                className="p-0 inline-block"
              >
                <div className="p-2 h-full">
                  <FaTwitter className={cn("inline-block mr-2 ml-1")} />
                  <span className="mr-2 mt-8 h-full">Twitter</span>
                </div>
              </Link>
            </motion.div>
            <motion.div
              variants={item}
              className={cn(
                "inline-block justify-end items-end mr-4 mb-2 rounded-xl border bg-card text-card-foreground shadow"
              )}
            >
              <Link
                href="https://github.com/Taiyaki256"
                className="p-0 inline-block"
              >
                <div className="p-2 h-full">
                  <FaGithub className={cn("inline-block mr-2 ml-1")} />
                  <span className="mr-2 mt-8 h-full">Github</span>
                </div>
              </Link>
            </motion.div>
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
      <motion.div
        className={cn(
          "mt-4 rounded-xl border bg-card text-card-foreground shadow w-full h-full box-border"
        )}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mt-8 mb-8 flex">
          <div className="ml-4 mr-4">
            <span className="text-2xl font-bold flex flex-row">
              <FiAlertCircle className="pt-1" />
              WIP
            </span>
            <br />
            <span className="text-medium font-bold">
              C/C++/C#/Java/Javascript/Python
            </span>
            <br />
            <button
              onClick={() => {
                setNumber(number + 1);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              CountButton
            </button>
            <br />
            {number}
          </div>
        </div>
      </motion.div>
    </>
  );
}
