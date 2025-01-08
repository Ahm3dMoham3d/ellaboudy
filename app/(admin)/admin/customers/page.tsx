import DataTable from "@/components/DataTable";
import { columns } from "./columns";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
export default function page() {
  return (
    <>
      <div className='mb-2 flex gap-2 justify-between items-center'>
        <h4 className='text-lg'>العملاء</h4>
        <Button size={"sm"}>
          <Link
            href={"/admin/customers/create"}
            className='flex items-center gap-2'
          >
            اضافة عميل
            <Plus className='w-4 h-4' />
          </Link>
        </Button>
      </div>
      <div>
        <DataTable data={[]} columns={columns} />
      </div>
    </>
  );
}
