/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/utils/utils";
import ShimmerButton from "./shimer-button";
import WordAnimator from "./word-animator";
import Link from "next/link";

const LandingPage = () => {

  const [blocks, setBlocks] = useState([]);

  const activeDivs = useMemo(
    () => ({
      0: new Set([4, 1]),
      2: new Set([3]),
      4: new Set([2, 5, 8]),
      5: new Set([4]),
      6: new Set([0]),
      7: new Set([1]),
      10: new Set([3]),
      12: new Set([7]),
      13: new Set([2, 4]),
      14: new Set([1, 5]),
      15: new Set([3, 6]),
    }),
    []
  );

  useEffect(() => {
    const updateBlocks = () => {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.06;
      const amountOfBlocks = Math.ceil(innerHeight / blockSize);

      const newBlocks = Array.from({ length: 17 }, (_, columnIndex) => (
        <div key={columnIndex} className="w-[6vw] h-full">
          {Array.from({ length: amountOfBlocks }, (_, rowIndex) => (
            <div
              key={rowIndex}
              className={`h-[6vw] w-full border-[1px] dark:border-[rgba(255,255,255,0.015)] border-gray-50 ${
                // @ts-ignore
                activeDivs[columnIndex]?.has(rowIndex)
                  ? "dark:bg-[rgba(255,255,255,0.03)] bg-gray-50"
                  : ""
              }`}
              style={{ height: `${blockSize}px` }}
            ></div>
          ))}
        </div>
      ));
      // @ts-ignore
      setBlocks(newBlocks);
    };

    updateBlocks();
    window.addEventListener("resize", updateBlocks);

    return () => window.removeEventListener("resize", updateBlocks);
  }, [activeDivs]);

  const words = ["Smarter", "Simpler", "Faster", "Stronger"];

  return (
    <div>
      <section className="h-screen overflow-hidden relative pb-20 dark:bg-black bg-white">
        {/* Background */}
        <div className="absolute inset-0 -z-0 h-screen w-full dark:bg-[radial-gradient(#1d1d1d_1px,transparent_1px)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute inset-0 top-0 left-0 h-screen w-full items-center px-5 py-24 bg-gradient-to-t dark:from-[#050505] from-white from-0% to-transparent to-60%"></div>

        {/* Hero Content */}
        <article className="grid 2xl:pt-52 2xl:pb-24 py-40 relative text-primary-foreground z-[2] sm:px-0 px-4">
          {/* <NewItemsLoading /> */}
          <h1 className="xl:text-7xl md:text-6xl sm:text-5xl text-3xl text-center font-semibold tracking-tight">
            <span className="text-[2.5rem]">Tech Made Easy,</span>{" "}
            <span className="relative translate-x-0 flex gap-2 justify-center">
              Learn{" "}
              <WordAnimator
                words={words}
                duration={5}
                className="italic w-fit pr-3 dark:bg-gray-800 bg-gray-200 dark:border-neutral-800 border-neutral-200"
              />{" "}
              Tips.
            </span>
          </h1>
          <p className="mx-auto lg:w-[700px] sm:w-[80%] text-center sm:text-lg text-sm mt-5">
            Discover practical guides, coding tricks, productivity hacks, and
            the latest in <strong>tech innovations</strong>. Stay ahead in the
            digital world with bite-sized, actionable tips.
          </p>
          <div className="flex gap-2 justify-center items-center mt-4">
            <Link href="/tips">
              <ShimmerButton
                borderRadius={"100px"}
                className={cn(
                  "flex items-center gap-2 w-fit rounded-full text-white border sm:px-4 px-2 py-2"
                )}
                background={"#334cec"}
              >
                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Explore Tech Tips
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </article>

        {/* Background Blocks */}
        <div className="flex h-screen overflow-hidden top-0 left-0 inset-0 z-0 absolute">
          {blocks}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
