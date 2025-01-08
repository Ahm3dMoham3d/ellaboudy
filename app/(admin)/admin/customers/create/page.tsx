"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Formik, Form } from "formik";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Combobox from "@/components/ComboBox";
import govs from "@/data/cities.json";

export default function Page() {
  const govsData = govs.map((e) => ({
    label: e.governorate_name_ar,
    value: e.governorate_name_ar,
  }));
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [phoneNumbersData, setPhoneNumbersData] = useState<
    { number: string; wa: boolean }[]
  >([]);
  const addPhoneNumber = () => {
    setPhoneNumbersData((prevData) => [
      ...prevData,
      { number: phoneNumber, wa: false },
    ]);
    setPhoneNumber("");
  };

  const removePhoneNumberByIndex = (index: number) => {
    setPhoneNumbersData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const toggleWaByIndex = (index: number, val: boolean) => {
    setPhoneNumbersData((prevData) =>
      prevData.map((item, i) => (i === index ? { ...item, wa: val } : item))
    );
  };

  return (
    <div>
      <h4 className='text-lg mb-2'>أضافة عميل جديد</h4>
      <div className='border rounded-md p-4'>
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
              <div>
                <Label htmlFor='name'>أسم العميل</Label>
                <Input
                  className='mt-2'
                  id='name'
                  name='name'
                  placeholder='اسم العميل'
                  type='text'
                />
              </div>

              <div>
                <Label htmlFor='name'>الرقم القومي</Label>
                <Input
                  className='mt-2'
                  id='name'
                  name='name'
                  placeholder='الرقم القومي'
                  type='number'
                />
              </div>

              <div>
                <Label htmlFor='email'>حساب العميل</Label>
                <Input
                  className='mt-2'
                  id='email'
                  name='email'
                  placeholder='حساب العميل'
                  type='email'
                />
              </div>

              <div>
                <Label htmlFor='dob'>تاريخ الميلاد</Label>
                <Input
                  className='mt-2'
                  id='dob'
                  name='dob'
                  placeholder='تاريخ الميلاد'
                  type='date'
                />
              </div>

              <div>
                <Label htmlFor='address'>العنوان بالتفصيل</Label>
                <Input
                  className='mt-2'
                  id='address'
                  name='address'
                  placeholder='العنوان بالتفصيل'
                  type='string'
                />
              </div>

              <div>
                <Label htmlFor='address'>النوع</Label>
                <Select defaultValue={"MALE"}>
                  <SelectTrigger className='mt-2'>
                    <SelectValue placeholder='النوع' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='MALE'>ذكر</SelectItem>
                    <SelectItem value='FEMALE'>أنثي</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor='address'>المحافظة</Label>
                <div className='mt-2 w-full'>
                  <Combobox data={govsData} searchLabel='اختر المحافظة' />
                </div>
              </div>

              <div>
                <Label htmlFor='address'>العنوان بالتفصيل</Label>
                <Input
                  className='mt-2'
                  id='address'
                  name='address'
                  placeholder='العنوان بالتفصيل'
                  type='string'
                />
              </div>

              <div className='lg:col-span-3'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                  <div>
                    <div>
                      <Label htmlFor='phoneNumber'>ارقام الهاتف</Label>
                    </div>

                    <div className='mt-2 flex items-center gap-2'>
                      <Input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className='text-right placeholder:text-right'
                        id='phoneNumber'
                        placeholder='أدخل رقم الهاتف'
                        type='tel'
                      />
                      <Button
                        type='button'
                        onClick={() => addPhoneNumber()}
                        disabled={!phoneNumber}
                        size={"icon"}
                        variant={"ghost"}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                  <div id='phoneTables' className='lg:col-span-2'>
                    <Table className='w-full'>
                      <TableHeader>
                        <TableRow>
                          <TableHead className='text-start'>
                            رقم الهاتف
                          </TableHead>
                          <TableHead className='text-start'>
                            متاح واتساب
                          </TableHead>

                          <TableHead className='text-start'>
                            الأجراءات
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {phoneNumbersData.map((e, i) => {
                          return (
                            <TableRow key={i}>
                              <TableCell className='text-start'>
                                {e.number}
                              </TableCell>
                              <TableCell className='text-start'>
                                <div className='flex items-center gap-4'>
                                  <Checkbox
                                    checked={phoneNumbersData[i].wa}
                                    onCheckedChange={(checked) =>
                                      toggleWaByIndex(i, checked === true)
                                    }
                                  />
                                  <Label>
                                    {phoneNumbersData[i].wa
                                      ? "متاح"
                                      : "غير متاح"}
                                  </Label>
                                </div>
                              </TableCell>
                              <TableCell className='text-start'>
                                <Button
                                  onClick={() => removePhoneNumberByIndex(i)}
                                  variant={"noHover"}
                                  size={"sm"}
                                >
                                  <Trash className='text-red-500 w-4 h-4' />
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-4 flex justify-end'>
              <Button type='submit'>إنشاء</Button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
