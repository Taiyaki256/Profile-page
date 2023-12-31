"use client";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { FaLocationArrow, FaSchool, FaTwitter, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import hljs from "highlight.js/lib/core";
hljs.registerLanguage("c", require("highlight.js/lib/languages/c"));
import "highlight.js/styles/github.css";
import useInterval from "@/components/useInterval";
import { set } from "date-fns";

type Props = {
  code: string;
};

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.4 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
};

function getAge() {
  const birthday = {
    year: 2006,
    month: 9,
    date: 22,
  };
  var today = new Date();
  var thisYearsBirthday = new Date(
    today.getFullYear(),
    birthday.month - 1,
    birthday.date
  );
  var age = today.getFullYear() - birthday.year;
  if (today < thisYearsBirthday) {
    age--;
  }
  return age;
}

const codingSeq: [number, string, string][] = [
  [0, "i", ""],
  [1, "n", ""],
  [2, "t", ""],
  [3, " ", ""],
  [4, "m", ""],
  [5, "a", ""],
  [6, "i", ""],
  [7, "n", ""],
  [8, "(", ""],
  [9, ")", ""],
  [10, "{", ""],
  [11, "}", ""],
  [11, "\n", ""],
  [12, "\n", ""],
  [12, "\t", ""],
  [13, "p", ""],
  [14, "r", ""],
  [15, "i", ""],
  [16, "n", ""],
  [17, "t", ""],
  [18, "f", ""],
  [19, "(", ""],
  [20, ")", ""],
  [21, ";", ""],
  [20, '"', ""],
  [21, '"', ""],
  [21, "H", ""],
  [22, "e", ""],
  [23, "l", ""],
  [24, "l", ""],
  [25, "o", ""],
  [26, ",", ""],
  [27, " ", ""],
  [28, "W", ""],
  [29, "o", ""],
  [30, "r", ""],
  [31, "l", ""],
  [32, "d", ""],
  [33, "!", ""],
  [39, "\n", ""],
];

function CodeBlock(props: Props) {
  const highlightedCode: string = hljs.highlight(props.code, {
    language: "c",
  }).value;

  return (
    <pre>
      <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    </pre>
  );
}
let curSeek = 0;
let nextSeek = 0;

export default function Home() {
  const { setTheme } = useTheme();
  const [codeStr, setCodeStr] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  useInterval(
    () => {
      console.log("interval");
      updateCode();
    },
    isInView ? 200 : null
  );

  function updateCode() {
    console.log("update");
    console.log(codeStr);
    nextSeek++;
    if (nextSeek >= codingSeq.length) {
      nextSeek--;
    }
    if (nextSeek >= curSeek) {
      for (let i = curSeek; i < nextSeek; i++) {
        addCode(codingSeq[i]);
      }
    } else {
      for (let i = curSeek - 1; i >= nextSeek; i--) {
        undoCode(codingSeq[i]);
      }
    }
    curSeek = nextSeek;
  }

  function addCode(diffCode: [number, string, string]) {
    let si = diffCode[0];
    let addStr = diffCode[1];
    let delN = diffCode[2].length;
    setCodeStr(
      codeStr.substring(0, si) + addStr + codeStr.substring(si + delN)
    );
  }

  function undoCode(diffCode: [number, string, string]) {
    let si = diffCode[0];
    let addedN = diffCode[1].length;
    let deletedStr = diffCode[2];
    setCodeStr(
      codeStr.substring(0, si) + deletedStr + codeStr.substring(si + addedN)
    );
  }
  return (
    <>
      <div className="flex flex-row w-full h-full flex-wrap">
        <motion.div
          className={cn(
            "mb-4 rounded-xl border bg-card text-card-foreground shadow max-w-xl h-full box-border"
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
              <span className="text-base font-light text-gray-600 dark:text-gray-200 ml-6 mb-2 flex">
                <HoverCard>
                  <HoverCardTrigger>@taiyaki256</HoverCardTrigger>
                  <HoverCardContent>コンニチハ</HoverCardContent>
                </HoverCard>
              </span>
            </div>
            <div className="flex ml-auto mt-auto h-full">
              <motion.div
                variants={item}
                className={cn(
                  "inline-block justify-end items-end mr-2 bg-card text-card-foreground"
                )}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <IoSunnyOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <IoMoonOutline className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </motion.div>
              <motion.div
                variants={item}
                className={cn(
                  "inline-block justify-end items-end mr-2 mb-2 rounded-xl border bg-card text-card-foreground shadow"
                )}
              >
                <Link
                  href="https://twitter.com/tr_taiyaki"
                  className="p-0 inline-block"
                >
                  <div className="p-2 h-full">
                    <FaTwitter
                      color={"#1DA1F2"}
                      className={cn("inline-block mr-2 ml-1")}
                    />
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
              <span className={cn("inline-block font-normal")}>
                日本 / Japan
              </span>
            </p>
          </div>
          <div className={cn("px-4 pb-2 pt-1")}>
            <p className={cn("text-sm")}>
              <FaSchool className={cn("inline-block mr-2")} />
              <span className={cn("inline-block font-normal")}>
                NITTC Tokyo
              </span>
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        className={cn(
          "mt-4 mb-4 rounded-xl border bg-card text-card-foreground shadow w-full h-full box-border"
        )}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mt-4 mb-8 flex">
          <div className="ml-4 mr-4">
            <motion.span
              variants={item}
              className="text-2xl font-bold flex flex-row"
            >
              About Me
            </motion.span>
            <motion.div variants={item} className="">
              <span className="text-lg font-semibold flex flex-row">Age</span>
              {getAge()}
            </motion.div>
            <motion.div variants={item} className="">
              <span className="text-lg font-semibold flex flex-row">
                Birthday
              </span>
              2006/09/22
            </motion.div>
            <motion.div variants={item} className="">
              <span className="text-lg font-semibold flex flex-row">Skill</span>
              C/C++/C#/Java/Javascript/Python
            </motion.div>
            <br />
            <br />
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={ref}
        className="mb-4 mt-8 rounded-xl border bg-card text-card-foreground shadow max-w-xl h-full box-border"
      >
        <div className="m-4">
          <CodeBlock code={codeStr} />
        </div>
      </motion.div>
    </>
  );
}
