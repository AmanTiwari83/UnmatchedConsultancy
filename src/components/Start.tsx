"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import type { Variants } from "framer-motion";
import Button from "./common/Button";
import SecondaryButton from "./common/SecondaryButton";
import { stats } from "../data/stats-data";

/* ------------------ SAME ANIMATION STYLE ------------------ */

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Start() {
  return (
    <motion.section
      className="flex flex-col items-center text-sm bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/home/bg-with-grid.png')",
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.main
        className="flex flex-col items-center mb-10 md:mb-12 max-md:px-2"
        variants={containerVariants}
      >
        {/* Announcement */}
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="mt-20 lg:mt-15 md:mt-26 flex items-center gap-2 border border-primary-800 rounded-full p-1 px-3 text-sm font-medium text-primary family-medium bg-white"
          >
            <span>Unmatched solution of all business problems</span>
          </Link>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="
            px-4 md:px-16 lg:px-24 mt-6 max-w-5xl text-center
            text-3xl leading-snug
            sm:text-4xl sm:leading-tight
            md:text-6xl md:leading-[80px]
            text-primary-900
            family-mainheading
          "
        >
          Unmatched Consultancy — Your Trusted Business Partner
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="
            mx-auto mt-3 text-center
            text-sm leading-relaxed
            sm:text-base sm:leading-relaxed
            max-w-[90%]
            sm:max-w-2xl
            text-slate-700
          "
        >
          Unmatched Consultancy helps startups and businesses stay compliant,
          streamline operations, and grow with confidence, backed by experts
          supporting businesses globally.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mt-8"
        >
          <Button
            href="/contact"
            title="Get Started"
          />
          <SecondaryButton
            href="/services"
            title="Our Services"
          />
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="
            mx-auto mt-10 md:mt-14 w-full max-w-4xl
            grid grid-cols-2 gap-y-8 gap-x-6
            sm:grid-cols-2
            md:grid-cols-4 md:gap-x-10
          "
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              <h2
                className="
          text-3xl font-semibold text-primary-900
          md:text-4xl
        "
              >
                <CountUp start={0} end={stat.end} duration={2} />
                {stat.suffix}
              </h2>

              <p
                className="
          mt-1 text-sm font-medium
          text-primary-600
        "
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.main>
    </motion.section>
  );
}

