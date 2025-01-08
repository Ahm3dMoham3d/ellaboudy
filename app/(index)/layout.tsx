import type { Metadata } from "next";
import Navbar from "@/components/layout/client/Navbar";
import Footer from "@/components/layout/client/Footer";

import Dir from "@/components/provider";

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
    <>
      <Navbar />
      <main className='flex-grow w-full max-w-[1440px] mx-auto p-4 mb-16'>
        <Dir>{children}</Dir>
      </main>
      <Footer />
    </>
  );
}
