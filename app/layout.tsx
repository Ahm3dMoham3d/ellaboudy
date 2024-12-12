import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Dir from "@/components/provider";

const neue = localFont({
  src: [
    { path: "./fonts/NeueFrutigerWorld-Regular.woff", weight: "400" },
    { path: "./fonts/NeueFrutigerWorld-Medium.woff", weight: "500" },
    { path: "./fonts/NeueFrutigerWorld-Bold.woff", weight: "700" },
    { path: "./fonts/NeueFrutigerWorld-Black.woff", weight: "800" },
  ],
});

export const metadata: Metadata = {
  title: {
    template:
      "%s | مكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة والإستشارات المالية والضريبية",
    default:
      "مكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة والإستشارات المالية والضريبية",
  },
  description:
    "مكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة والاستشارات المالية والضريبية يقدم خدمات إدارة الحسابات، التحليل المالي، المراجعة، النصائح الضريبية، والاستشارات المالية للمشاريع وتحليل السوق.",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' dir='rtl' lang='ar'>
      <body
        className={`${neue.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className='flex-grow w-full max-w-[1440px] mx-auto p-4 mb-16'>
          <Dir>{children}</Dir>
        </main>
        <Footer />
      </body>
    </html>
  );
}
