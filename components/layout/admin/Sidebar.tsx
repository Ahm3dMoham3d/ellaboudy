"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { ChartColumn, FileStack, Users } from "lucide-react";
import { usePathname } from "next/navigation";
export function AppSidebar() {
  const currentRoute = usePathname();
  return (
    <Sidebar side='right'>
      <SidebarHeader>
        <div className='w-full flex justify-center py-2'>
          <Image width={180} height={80} alt='logo' src={Logo} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className='p-2 flex flex-col gap-2'>
          <Link
            className={`${
              currentRoute == "/admin" ? "bg-primary text-white" : ""
            } p-2 flex items-center gap-2 hover:bg-primary hover:text-white rounded-md transition-colors`}
            href={"/admin/"}
          >
            <ChartColumn className='w-5 h-5' /> نظرة عامة
          </Link>

          <Link
            className={`${
              currentRoute == "/admin/customers" ? "bg-primary text-white" : ""
            } p-2 flex items-center gap-2 hover:bg-primary hover:text-white rounded-md transition-colors`}
            href={"/admin/customers"}
          >
            <Users className='w-5 h-5' /> العملاء
          </Link>

          <Link
            className={`${
              currentRoute == "/admin/services" ? "bg-primary text-white" : ""
            } p-2 flex items-center gap-2 hover:bg-primary hover:text-white rounded-md transition-colors`}
            href={"/admin/services"}
          >
            <FileStack className='w-5 h-5' /> الخدمات
          </Link>
        </div>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
