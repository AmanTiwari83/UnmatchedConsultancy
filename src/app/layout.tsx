import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuickMessage from "@/components/QuickMessage";
import { ToastContainer } from "react-toastify";



const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Unmatched Consultancy | Business Advisory & Financial Services",
  description:
    "Unmatched Consultancy helps businesses grow with clarity and confidence. We provide expert business advisory, statutory compliance, and financial services for startups and established organizations.",
  keywords: [
    "unmatched",
    "consultancy",
    "Unmatched Consultancy",
    "business consultancy",
    "financial services",
    "statutory compliance",
    "startup advisory",
    "business growth strategy",
    "entrepreneur consulting",
  ],
  metadataBase: new URL("https://unmatchedconsultancy.com"),

  openGraph: {
    title: "Unmatched Consultancy | Business Advisory & Financial Services",
    description:
      "Unmatched Consultancy helps businesses grow with clarity and confidence. We provide expert business advisory, statutory compliance, and financial services for startups and established organizations.",
    url: "https://unmatchedconsultancy.com",
    siteName: "Unmatched Consultancy",
    images: [
      {
        url: "https://www.unmatchedconsultancy.com/uclogo.png",
        width: 1200,
        height: 600,
        alt: "Unmatched Consultancy Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Unmatched Consultancy | Business Advisory & Financial Services",
    description:
      "Unmatched Consultancy helps businesses grow with clarity and confidence. Expert business advisory, statutory compliance, and financial services for startups and established organizations.",
    images: ["https://www.unmatchedconsultancy.com/uclogo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
            <head>
        {/* Add JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unmatched Consultancy",
              url: "https://unmatchedconsultancy.com",
              logo: "https://www.unmatchedconsultancy.com/uclogo.png",
              sameAs: [
                "https://www.linkedin.com/company/unmatchedconsultancy/",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  email: "unmatchedconsultancy@gmail.com",
                  telephone: "+91-9910678889",
                  contactType: "Customer Service",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} family-regular antialiased`}>
        <Navbar />
        {children}
        <QuickMessage />

        <ToastContainer
          position="top-right"
          autoClose={3000}
          newestOnTop
          closeOnClick
          pauseOnHover
        />

        <Footer />
      </body>
    </html>
  );
}
