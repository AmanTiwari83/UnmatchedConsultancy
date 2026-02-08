// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { MdEmail } from "react-icons/md";
// import { IoIosCall } from "react-icons/io";
// import { IoLogoLinkedin } from "react-icons/io5";
// import { FaInstagram } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { MdOutlineMailOutline } from "react-icons/md";
// import type { Variants } from "framer-motion";


// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   /* ------------------ Animations (same style) ------------------ */

// const fadeDown: Variants = {
//   hidden: { opacity: 0, y: -16 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };


// const mobileMenuVariants: Variants = {
//   hidden: { opacity: 0, y: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       staggerChildren: 0.08,
//       ease: "easeOut",
//     },
//   },
//   exit: {
//     opacity: 0,
//     y: -10,
//     transition: {
//       duration: 0.2,
//       ease: "easeIn",
//     },
//   },
// };

// const mobileItem: Variants = {
//   hidden: { opacity: 0, y: -8 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.25,
//       ease: "easeOut",
//     },
//   },
// };



//   return (
//     <>
//       {/* Top Banner */}
//       <motion.div
//         variants={fadeDown}
//         initial="hidden"
//         animate="show"
//         className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-2 gap-0"
//       >
//         <p className="text-center md:text-left text-sm md:text-base mt-1 family-light">
//           <a
//             href="mailto:unmatchedconsultancy@gmail.com"
//             className="inline-flex items-center gap-1 hover:text-secondary-500 transition"
//           >
//             <MdEmail className="text-secondary-500 text-xl" />
//             unmatchedconsultancy@gmail.com
//           </a>

//           <br className="md:hidden" />

//           <a
//             href="tel:+919650773891"
//             className="inline-flex items-center gap-1 ml-2 hover:text-secondary-500 transition"
//           >
//             <IoIosCall className="text-secondary-500 text-xl" />
//             +91 9910678889
//           </a>
//         </p>

//         <div className="hidden md:flex items-center gap-2">
//           {[IoLogoLinkedin, MdOutlineMailOutline, FaXTwitter, FaInstagram].map(
//             (Icon, i) => (
//               <Link key={i} href="/">
//                 <Icon className="text-secondary-500 text-lg ml-1 hover:text-secondary-600 transition active:scale-95" />
//               </Link>
//             )
//           )}
//         </div>
//       </motion.div>

//       {/* Navbar */}
//       <motion.nav
//         variants={fadeDown}
//         initial="hidden"
//         animate="show"
//         className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 lg:px-24 xl:px-32"
//       >
//         <div className="flex items-center justify-between h-[72px]">
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <div className="relative h-20 sm:h-11 md:h-20 w-[120px] sm:w-[140px] md:w-[160px] ">
//               <Image
//                 src="/images/logo.png"
//                 alt="Company Logo"
//                 fill
//                 priority
//                 className="object-contain"
//               />
//             </div>
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 family-semibold text-sm">
//             {[
//               ["Home", "/"],
//               ["About Us", "/about"],
//               ["Our Services", "/services"],
//               ["Team", "/team"],
//               ["Blogs", "/blogs"],
//               ["FAQ's", "/faq"],
//             ].map(([label, href]) => (
//               <li key={label} className="relative group">
//                 <Link
//                   href={href}
//                   className="text-gray-700 hover:text-secondary-600 transition"
//                 >
//                   {label}
//                 </Link>
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-secondary-600 transition-all duration-300 group-hover:w-full" />
//               </li>
//             ))}

//             <li>
//               <Link
//                 href="/contact"
//                 className="ml-4 inline-flex items-center rounded-full bg-primary-900 px-5 py-2 text-white text-sm font-semibold hover:bg-secondary-600 transition"
//               >
//                 Contact Us &nbsp;
//                   <svg width="14" height="14" viewBox="0 0 13 12" fill="none">
//               <path
//             d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
//             fill="white"
//           />
//             </svg>
//               </Link>
//             </li>
//           </ul>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg width="26" height="26" viewBox="0 0 30 30">
//               <path
//                 d="M3 7h24M3 15h24M3 23h24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.ul
//               variants={mobileMenuVariants}
//               initial="hidden"
//               animate="show"
//               exit="exit"
//               className="md:hidden flex flex-col gap-4 py-6 text-sm font-medium"
//             >
//               {[
//                 ["Home", "/"],
//                 ["About Us", "/about"],
//                 ["Our Services", "/services"],
//                 ["Team", "/team"],
//                 ["Blogs", "/blogs"],
//                 ["FAQ's", "/faq"],
//                 ["Contact Us", "/contact"],
//               ].map(([label, href]) => (
//                 <motion.li key={label} variants={mobileItem}>
//                   <Link
//                     href={href}
//                     onClick={() => setIsMobileMenuOpen(false)}
//                     className="block rounded-lg px-4 py-3 hover:bg-primary-50 hover:text-primary-900 transition"
//                   >
//                     {label}
//                   </Link>
//                 </motion.li>
//               ))}
//             </motion.ul>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
// }


"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // get current route

  /* ------------------ Animations ------------------ */
  const fadeDown: Variants = {
    hidden: { opacity: 0, y: -16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const mobileItem: Variants = {
    hidden: { opacity: 0, y: -8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  const links: [string, string][] = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Our Services", "/services"],
    ["Team", "/team"],
    ["Blogs", "/blogs"],
    ["FAQ's", "/faq"],
  ];

  return (
    <>
      {/* Top Banner */}
      <motion.div
        variants={fadeDown}
        initial="hidden"
        animate="show"
        className="w-full bg-primary-800 text-white flex flex-col md:flex-row justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-2 gap-0"
      >
        <p className="text-center md:text-left text-sm md:text-base mt-1 family-light">
          <a
            href="mailto:unmatchedconsultancy@gmail.com"
            className="inline-flex items-center gap-1 hover:text-secondary-500 transition"
          >
            <MdEmail className="text-secondary-500 text-xl" />
            unmatchedconsultancy@gmail.com
          </a>
          <br className="md:hidden" />
          <a
            href="tel:+919650773891"
            className="inline-flex items-center gap-1 ml-2 hover:text-secondary-500 transition"
          >
            <IoIosCall className="text-secondary-500 text-xl" />
            +91 9910678889
          </a>
        </p>

        <div className="hidden md:flex items-center gap-2">
          {[
            { icon: IoLogoLinkedin, href: "https://www.linkedin.com/company/unmatchedconsultancy/" },
            { icon: MdOutlineMailOutline, href: "mailto:unmatchedconsultancy@gmail.com" },
            { icon: FaXTwitter, href: "https://twitter.com/yourhandle" },
            { icon: FaInstagram, href: "https://instagram.com/yourhandle" },
          ].map(({ icon: Icon, href }, i) => (
            <Link key={i} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="text-secondary-500 text-lg ml-1 hover:text-secondary-600 transition active:scale-95" />
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Navbar */}
      <motion.nav
        variants={fadeDown}
        initial="hidden"
        animate="show"
        className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 px-6 md:px-16 lg:px-24 xl:px-32"
      >
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-20 sm:h-11 md:h-20 w-[120px] sm:w-[140px] md:w-[160px] ">
              <Image
                src="/images/logo.png"
                alt="Company Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-semibold text-sm">
            {links.map(([label, href]) => {
              const isActive = pathname === href;
              return (
                <li key={label} className="relative group">
                  <Link
                    href={href}
                    className={`transition ${isActive
                        ? "text-secondary-600" // golden for active
                        : "text-gray-700 hover:text-secondary-600"
                      }`}
                  >
                    {label}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full bg-secondary-600`}
                  />
                </li>
              );
            })}

            {/* CTA Button */}
            <li>
              <Link
                href="/contact"
                className="ml-4 inline-flex items-center rounded-full bg-primary-900 px-5 py-2 text-white text-sm font-semibold hover:bg-secondary-600 transition"
              >
                Contact Us &nbsp;
                <svg width="14" height="14" viewBox="0 0 13 12" fill="none">
                  <path
                    d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden rounded-lg p-2 hover:bg-gray-100 transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="26" height="26" viewBox="0 0 30 30">
              <path
                d="M3 7h24M3 15h24M3 23h24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.ul
              variants={mobileMenuVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="md:hidden flex flex-col gap-4 py-6 text-sm font-medium"
            >
              {links.concat([["Contact Us", "/contact"]]).map(([label, href]) => (
                <motion.li key={label} variants={mobileItem}>
                  <Link
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block bg-primary-900 rounded-lg px-4 py-3 transition ${pathname === href
                        ? "text-secondary-600"
                        : "hover:bg-primary-50 hover:text-primary-900"
                      }`}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}