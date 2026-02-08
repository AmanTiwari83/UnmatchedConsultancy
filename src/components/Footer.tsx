import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaBuilding, FaCaretRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-gray-50 px-6 md:px-16 lg:px-24 xl:px-32 pt-12 pb-8">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12 md:gap-20 border-b border-gray-600 pb-10">
        {/* Logo + About */}
        <div className="md:max-w-sm flex-shrink-0">
          <Link href="/" className="flex items-center">
            <div className="relative h-24 sm:h-24 md:h-28 w-[120px] sm:w-[140px] md:w-[160px]">
              <Image
                src="/images/logo-light.png"
                alt="Company Logo"
                fill
                priority
                sizes="(max-width: 640px) 120px,
                       (max-width: 768px) 140px,
                       160px"
                className="object-contain"
              />
            </div>
          </Link>

          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Unmatched Consultancy is your trusted partner for accounting, taxation, audit, and financial advisory services. We help businesses navigate complex regulations and make informed decisions for sustainable growth.
          </p>
        </div>

        {/* Links + Contact Info */}
        <div className="flex flex-col md:flex-row flex-1 gap-10 md:gap-20">
          {/* Company Links */}
          <div className="flex-1">
            <h2 className="font-semibold mb-6 text-lg text-gray-50">Company</h2>
            <ul className="text-sm space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Team", href: "/team" },
                { name: "Blogs", href: "/blog" },
                { name: "FAQ's", href: "/faq" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-300 hover:text-secondary-500 transition-colors"
                  >
                    <FaCaretRight className="text-secondary-500 inline" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h2 className="font-semibold mb-6 text-lg text-gray-50">Get in Touch</h2>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:+919910678889"
                className="flex items-center gap-2 text-gray-300 hover:text-secondary-500 transition-colors"
              >
                <FaPhoneAlt className="text-secondary-500" /> +91 9910678889
              </a>
              <a
                href="mailto:unmatchedconsultancy@gmail.com"
                className="flex items-center gap-2 text-gray-300 hover:text-secondary-500 transition-colors"
              >
                <MdEmail className="text-secondary-500" /> unmatchedconsultancy@gmail.com
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=144+St.no+05+Johripur,+Delhi+110094"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-secondary-500 transition-colors"
              >
                <FaBuilding className="text-secondary-500" /> Delhi: 144 St.no 05 Johripur, Delhi - 110094
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=B2-403,+Ivy+County,+Sector+75,+Noida+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-secondary-500 transition-colors"
              >
                <FaBuilding className="text-secondary-500" /> Noida: B2-403, Ivy County, Sector 75, Noida - 201301
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=B-45,+Sector+56,+Gurugram,+Haryana+122011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-secondary-500 transition-colors"
              >
                <FaBuilding className="text-secondary-500" /> Gurugram: B-45, Sector 56, Gurugram, Haryana - 122011
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <p className="pt-6 text-center text-xs md:text-sm text-gray-400">
        Copyright 2026 ©{" "}
        <Link href="#" className="hover:text-secondary-500 text-secondary-500 transition-colors">
          Unmatched Consultancy
        </Link>
        . All Rights Reserved.
      </p>
    </footer>
  );
}