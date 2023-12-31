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
import useInterval from "@/components/useInterval";

import "@/styles/highlight.scss";

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
  [0, "\n", ""],
  [0, "\n", ""],
  [0, " ", ""],
  [0, "", " "],
  [0, " ", ""],
  [0, "", " "],
  [0, " ", ""],
  [0, "", " "],
  [0, " ", ""],
  [0, "", " "],
  [1, "i", ""],
  [2, "n", ""],
  [3, "t", ""],
  [4, " ", ""],
  [5, "m", ""],
  [6, "a", ""],
  [7, "i", ""],
  [8, "n", ""],
  [9, "(", ""],
  [10, ")", ""],
  [11, "{", ""],
  [12, "}", ""],
  [12, "\n", ""],
  [13, "\n", ""],
  [13, "\t", ""],
  [14, "p", ""],
  [15, "r", ""],
  [16, "i", ""],
  [17, "n", ""],
  [18, "t", ""],
  [19, "f", ""],
  [20, "(", ""],
  [21, ")", ""],
  [22, ";", ""],
  [21, '"', ""],
  [22, '"', ""],
  [22, "H", ""],
  [23, "e", ""],
  [24, "l", ""],
  [25, "l", ""],
  [26, "o", ""],
  [27, ",", ""],
  [28, " ", ""],
  [29, "W", ""],
  [30, "o", ""],
  [31, "r", ""],
  [32, "l", ""],
  [33, "d", ""],
  [34, "!", ""],
  [40, "\n", ""],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [38, " ", ""],
  [38, "", " "],
  [0, "", 'int main(){\n\tprintf("Hello, World!");\n}\n'],
  [0, "\n\n\n\n", ""],
  [2, "n", ""],
  [3, "o", ""],
  [4, "w", ""],
  [5, " ", ""],
  [6, "l", ""],
  [7, "o", ""],
  [8, "a", ""],
  [9, "d", ""],
  [10, "i", ""],
  [11, "n", ""],
  [12, "g", ""],
  [13, " ", ""],
  [14, ".", ""],
  [15, " ", ""],
  [15, "", " "],
  [15, ".", ""],
  [16, " ", ""],
  [16, "", " "],
  [16, ".", ""],
  [17, " ", ""],
  [17, "", " "],
  [2, "", "now loading ..."],
  [1, "i", ""],
  [2, "n", ""],
  [3, "t", ""],
  [4, " ", ""],
  [5, "m", ""],
  [6, "a", ""],
  [7, "i", ""],
  [8, "n", ""],
  [9, "(", ""],
  [10, ")", ""],
  [11, "{", ""],
  [12, "}", ""],
  [15, "", "\n"],
  [15, "", "\n"],
  [12, "\n", ""],
  [13, "\n", ""],
  [13, "\t", ""],
  [14, "i", ""],
  [15, "n", ""],
  [16, "t", ""],
  [17, " ", ""],
  [18, "i", ""],
  [19, ",", ""],
  [20, " ", ""],
  [21, "c", ""],
  [22, "o", ""],
  [23, "u", ""],
  [24, "n", ""],
  [25, "t", ""],
  [26, "=", ""],
  [27, "0", ""],
  [28, ",", ""],
  [29, " ", ""],
  [30, "m", ""],
  [31, "a", ""],
  [32, "x", ""],
  [33, "=", ""],
  [34, "1", ""],
  [35, "0", ""],
  [36, "0", ""],
  [37, "0", ""],
  [38, "0", ""],
  [39, "0", ""],
  [40, ";", ""],
  [42, "\n", ""],
  [42, "\t", ""],
  [43, "d", ""],
  [44, "o", ""],
  [45, "u", ""],
  [46, "b", ""],
  [47, "l", ""],
  [48, "e", ""],
  [49, " ", ""],
  [50, "x", ""],
  [51, ",", ""],
  [52, "y", ""],
  [53, ",", ""],
  [54, "z", ""],
  [55, ",", ""],
  [56, "p", ""],
  [57, "i", ""],
  [58, ";", ""],
  [60, "\n", ""],
  [61, "\n", ""],
  [61, "\t", ""],
  [62, "s", ""],
  [63, "r", ""],
  [64, "a", ""],
  [65, "n", ""],
  [66, "d", ""],
  [67, "(", ""],
  [68, ")", ""],
  [69, ";", ""],
  [68, "t", ""],
  [69, "i", ""],
  [70, "m", ""],
  [71, "e", ""],
  [72, "(", ""],
  [74, ")", ""],
  [73, "N", ""],
  [74, "U", ""],
  [75, "L", ""],
  [76, "L", ""],
  [81, "\n", ""],
  [81, "\t", ""],
  [82, "f", ""],
  [83, "o", ""],
  [84, "r", ""],
  [85, "(", ""],
  [86, ")", ""],
  [86, "i", ""],
  [87, "=", ""],
  [88, "0", ""],
  [89, ";", ""],
  [90, "i", ""],
  [91, "<", ""],
  [92, "m", ""],
  [93, "a", ""],
  [94, "x", ""],
  [95, ";", ""],
  [96, "i", ""],
  [97, "+", ""],
  [98, "+", ""],
  [100, "{", ""],
  [101, "}", ""],
  [101, "\n", ""],
  [102, "\t", ""],
  [103, "\n", ""],
  [104, "\t", ""],
  [103, "\t", ""],
  [104, "x = (double)rand()/RAND_MAX;", ""],
  [133, "\n", ""],
  [133, "\t", ""],
  [134, "\t", ""],
  [135, "y = (double)rand()/RAND_MAX;\n", ""],
  [164, "\t", ""],
  [165, "\t", ""],
  [166, "z = x*x + y*y;\n", ""],
  [181, "\t", ""],
  [182, "\t", ""],
  [183, "if(z<1) count++;", ""],
  [203, "\n", ""],
  [203, "\t", ""],
  [204, "p", ""],
  [205, "i", ""],
  [206, "=", ""],
  [207, "(", ""],
  [208, ")", ""],
  [208, "d", ""],
  [209, "o", ""],
  [210, "u", ""],
  [211, "b", ""],
  [212, "l", ""],
  [213, "e", ""],
  [215, "c", ""],
  [216, "o", ""],
  [217, "u", ""],
  [218, "n", ""],
  [219, "t", ""],
  [220, "/", ""],
  [221, "m", ""],
  [222, "a", ""],
  [223, "x", ""],
  [224, "*", ""],
  [225, "4", ""],
  [226, ";", ""],
  [225, " ", ""],
  [224, " ", ""],
  [221, " ", ""],
  [220, " ", ""],
  [232, "\n", ""],
  [232, "\t", ""],
  [233, "p", ""],
  [234, "r", ""],
  [235, "i", ""],
  [236, "n", ""],
  [237, "t", ""],
  [238, "f", ""],
  [239, "(", ""],
  [240, ")", ""],
  [240, '"', ""],
  [241, '"', ""],
  [241, "%", ""],
  [242, "f", ""],
  [243, "\\", ""],
  [244, "n", ""],
  [246, ",", ""],
  [247, "p", ""],
  [248, "i", ""],
  [250, ";", ""],
  [252, "\n", ""],
  [252, "\t", ""],
  [253, "r", ""],
  [254, "e", ""],
  [255, "t", ""],
  [256, "u", ""],
  [257, "r", ""],
  [258, "n", ""],
  [259, " ", ""],
  [260, "0", ""],
  [261, ";", ""],
  [262, " ", ""],
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
    isInView ? 80 : null
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
        className="mb-4 mt-8 rounded-xl border bg-card text-card-foreground shadow h-full box-border"
      >
        <div className="m-4">
          <CodeBlock code={codeStr} />
        </div>
      </motion.div>
    </>
  );
}
