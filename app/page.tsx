"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Home() {
  return (
    <main className="pt-24">
      <div className="container mx-auto px-4">
        <motion.section
          className="flex flex-col md:flex-row items-center justify-center text-center md:text-left"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I&apos;m Taiyaki.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Welcome to my corner of the internet.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="https://github.com/Taiyaki256.png"
              alt="Taiyaki illustration"
              width={256}
              height={256}
              className="rounded-full"
            />
          </div>
        </motion.section>
      </div>

      <div className="mt-24 bg-slate-900 text-gray-300">
        <div className="container mx-auto px-4 py-16">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold text-center">About Me</h2>
            <div className="max-w-2xl mx-auto mt-8 text-lg">
              <p>
                I am a passionate developer and creator, currently studying at
                NITTC Tokyo. I enjoy building things for the web and exploring
                new technologies.
              </p>
            </div>
          </motion.section>

          <motion.section
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold text-center">
              Skills &amp; Participations
            </h2>
            <div className="max-w-2xl mx-auto mt-8">
              <h3 className="text-xl font-semibold">Skills</h3>
              <p className="text-lg">
                C++, C# (Unity), Java, JavaScript, Python
              </p>

              <h3 className="text-xl font-semibold mt-8">Participations</h3>
              <ul className="list-disc list-inside text-lg">
                <li>2023 NHK Robocon - S∅PNiR (Programmer)</li>
                <li>2023 Kanto Spring Robot Contest (Pit Crew)</li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
