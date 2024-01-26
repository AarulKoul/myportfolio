"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <Image
              src="/temp-pfp.jpg"
              alt="Profile Picture"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.2,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Aarul.</span> I'm an aspiring{" "}
        <span className="font-bold">full-stack developer</span>, actively
        looking for opportunities to{" "}
        <span className="font-bold">build amazing products</span>. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Link
          href="#contact"
          className="group flex gap-2 items-center bg-gray-900 text-white px-7 py-3 outline-none focus:scale-110 hover:scale-110 active:scale-105 rounded-full font-medium text-lg hover:bg-gray-800 transition w-fit"
        >
          Contact Me{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/LatestResume.pdf"
          download
          className="group flex bg-white outline-none focus:scale-105 hover:bg-slate-200 hover:scale-110 active:scale-105 transition w-fit text-black px-7 py-3 rounded-full font-medium text-lg items-center gap-2 cursor-pointer border border-black/10"
        >
          Download Resume
          <HiDownload className="opacity-75 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="flex bg-white outline-none focus:scale-105 hover:bg-slate-200 hover:scale-110 hover:text-gray-950 active:scale-105 transition text-gray-700 p-4 rounded-full font-medium text-lg items-center gap-2 border border-black/10"
          href="https://www.linkedin.com/in/aarulkoul/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex bg-white outline-none focus:scale-105 hover:bg-slate-200 hover:scale-110 hover:text-gray-950 active:scale-105 transition text-gray-700 p-4 rounded-full font-medium text-xl items-center gap-2 border border-black/10"
          href="https://github.com/AarulKoul"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
