import type { Metadata } from "next";

import Dir from "@/components/provider";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/admin/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import PageTitle from "@/components/layout/admin/PageTitle";

export const metadata: Metadata = {
  title: {
    template: "لوحة التحكم | %s",
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
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Dir>
          <SidebarProvider>
            <AppSidebar />

            <main className='w-full'>
              <nav className='w-full border-b'>
                <div className='max-w-[1440px] mx-auto p-4 flex items-center justify-between'>
                  <div className='flex items-center gap-4'>
                    <SidebarTrigger />
                    <h4 className='text-md'>
                      <PageTitle />
                    </h4>
                  </div>

                  <ThemeSwitcher />
                </div>
              </nav>
              <section className='max-w-[1440px] mx-auto p-4'>
                {children}
              </section>
            </main>
          </SidebarProvider>
        </Dir>
      </ThemeProvider>
    </>
  );
}
