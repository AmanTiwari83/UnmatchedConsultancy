"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import Heading from "./common/Heading";
import { useEffect, useState } from "react";

/* ------------------ Animations ------------------ */

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
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch("/api/blogs", { cache: "no-store" });
        const result = await res.json();

        setBlogs(result?.data || []);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  return (
    <motion.section
      className="py-12 px-4 md:px-16 lg:px-24 xl:px-32 bg-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Heading
        label="Blog & Article"
        title="Our Latest Insights"
        description="Stay ahead of the curve with fresh content on code, design, startups, and everything in between."
      />

      {/* ---------------- Loading State ---------------- */}

      {loading && (
        <div className="text-center mt-10 text-gray-500 text-lg">
          Loading blogs...
        </div>
      )}

      {/* ---------------- No Blogs State ---------------- */}

      {!loading && blogs.length === 0 && (
        <div className="text-center mt-10 text-gray-500 text-lg">
          No blogs found
        </div>
      )}

      {/* ---------------- Blogs Grid ---------------- */}

      {!loading && blogs.length > 0 && (
        <motion.div
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {blogs.map((item) => (
            <motion.div key={item.slug} variants={cardVariants}>
              <Link href={`/blogs/${item.slug}`} className="block h-full">
                <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer h-full">

                  {/* Image */}

                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width:768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}

                  <div className="p-5 space-y-3">

                    {/* Meta */}

                    <div className="flex items-center text-secondary-600  justify-between text-xs text-gray-500">
                      <span>{item.date}</span>
                      <span className="font-medium">
                        By {item.publishedBy}
                      </span>
                    </div>

                    {/* Title */}

                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug line-clamp-2">
                      {item.title}
                    </h3>

                    {/* Excerpt */}

                    <p className="text-sm text-gray-600 line-clamp-3">
                      {item.excerpt}
                    </p>

                    {/* CTA */}

                    <div className="flex items-center gap-2 pt-2 text-secondary-600 font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Read Article</span>
                      <span className="text-lg">→</span>
                    </div>

                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.section>
  );
}