"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { LiaLinkedinIn } from "react-icons/lia";
import { teamData } from "../data/teams-data.js";
import Heading from "./common/Heading";
import type { Variants } from "framer-motion";

type TeamProps = {
  limit?: number;
};

/* ------------------ SAME ANIMATION AS SERVICES ------------------ */

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

const cardVariants: Variants = {
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

/* ------------------ Component ------------------ */

export default function Team({ limit }: TeamProps) {
  const visibleTeam = limit
    ? teamData.slice(0, limit)
    : teamData;

  return (
    <motion.section
      className="py-12 bg-gray-50 px-4 md:px-16 lg:px-24 xl:px-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Heading */}
      <Heading
        label="Team"
        title="Meet Our Team"
        description="A dynamic team delivering unmatched business solutions."
      />

      {/* Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}

      >
        {visibleTeam.map((team, idx) => (
          <motion.div key={idx} variants={cardVariants}>

            <div
              className="
    group relative overflow-hidden
    rounded-2xl bg-white
    shadow-md transition-all duration-300
    hover:-translate-y-2 hover:shadow-2xl
  "
            >
              {/* Top Content */}
              <div className="px-6 pt-10 pb-6 text-center">
                {/* Avatar */}
                <div className="relative mx-auto mb-4 h-28 w-28">
                  <div
                    className="
          absolute inset-0 rounded-full
          bg-gradient-to-tr from-primary-500 to-secondary-400
          p-[3px]
          transition-transform duration-300
          group-hover:scale-105
        "
                  >
                    <div className="relative h-full w-full rounded-full bg-white">
                      <Image
                        src={team.image}
                        alt={team.name}
                        fill
                        sizes="112px"
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name */}
                <h2 className="text-lg font-semibold text-gray-900">
                  {team.name}
                </h2>

                {/* Role */}
                <p className="mt-1 text-sm font-medium text-secondary-600">
                  {team.role}
                </p>

                {/* Bio */}
                <p className="mx-auto mt-3 max-w-[260px] text-sm leading-relaxed text-gray-500">
                  {team.bio}
                </p>
              </div>

              {/* Bottom Social Strip (≈20%) */}
              <div
                className="
      flex items-center justify-center gap-5
      bg-primary-900
      py-4
      transition-colors duration-300
      group-hover:bg-secondary-600
    "
              >
                <Link
                  href="https://www.linkedin.com/company/unmatchedconsultancy/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        bg-white/15 text-white
        transition-all duration-300
        hover:bg-white hover:text-primary-900
        hover:scale-110
      "
                >
                  <LiaLinkedinIn />
                </Link>

                <Link
                  href="mailto:unmatchedconsultancy@gmail.com"
                  target="_blank"
                  aria-label="Email"
                  className="
        flex h-9 w-9 items-center justify-center
        rounded-full
        bg-white/15 text-white
        transition-all duration-300
        hover:bg-white hover:text-primary-900
        hover:scale-110
      "
                >
                  <MdEmail />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
