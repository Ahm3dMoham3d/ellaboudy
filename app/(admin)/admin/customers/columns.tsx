"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Customer = {
  id: string;
  name: string;
  email: string;
  nationalId: number;
  dob: Date;
  address: string;
  phoneNumbers: string[];
  waNumbers: string[];
  city: string;
  gender: "MALE" | "FEMALE";
};

import { Eye, MoreHorizontal, Pen, Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
export const columns: ColumnDef<Customer>[] = [
  {
    accessorKey: "name",
    header: () => <div className='text-right'>الأسم</div>,
  },
  {
    accessorKey: "nationalId",
    header: () => <div className='text-right'>الرقم القومي</div>,
  },
  {
    accessorKey: "email",
    header: () => <div className='text-right'>الحساب الشخصي</div>,
  },

  {
    id: "actions",
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>العمليات</DropdownMenuLabel>

            <DropdownMenuItem asChild>
              <Link
                className='flex items-center gap-2'
                href={`/admin/customers/${customer.id}`}
              >
                عرض
                <Eye />
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <Link
                className='flex items-center gap-2'
                href={`/admin/customers/edit/${customer.id}`}
              >
                تعديل
                <Pen />
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem asChild>
              <div className='flex items-center gap-2'>
                حذف
                <Trash />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
