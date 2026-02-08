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

export const metadata: Metadata = {
  title: "Unmatched Consultancy",
  description: "Professional accounting, taxation & advisory services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
