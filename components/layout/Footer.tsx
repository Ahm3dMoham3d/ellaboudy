import { Facebook, Linkedin, Phone, Mail } from "lucide-react";
import { data } from "@/data/services";
import Link from "next/link";
import logo from "@/public/logo.svg";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className='w-full max-w-[1440px] mx-auto p-4'>
      <div className='grid gap-6 lg:grid-cols-4'>
        <div className='flex flex-col' id='social'>
          <div className='mb-2'>
            <Image width={150} height={150} alt='yasa_logo' src={logo} />
            <p className='mt-4 text-sm text-foreground/70'>
              خدمات محاسبية، ضريبية واستشارية شاملة تناسب احتياجاتك
            </p>

            <div className='flex items-center gap-2 mt-2'>
              <Link href={"#"}>
                <Facebook className='w-8 h-8 bg-primary p-1.5 text-white rounded-md' />
              </Link>

              <Link href={"#"}>
                <Linkedin className='w-8 h-8 bg-primary p-2 text-white rounded-md' />
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 col-span-2' id='quick_links'>
          <h4 className='text-xl'>خدماتنا</h4>
          {data.map((e, i) => {
            return (
              <div key={i}>
                <Link
                  className='text-foreground/65 hover:text-foreground transition-colors w-auto'
                  href={`/services/${e.slug}`}
                >
                  {e.title}
                </Link>
              </div>
            );
          })}
        </div>

        <div className='flex flex-col gap-2' id='contact_us'>
          <h4 className='text-xl'>بيانات التواصل</h4>
          <div className='flex items-center gap-2'>
            <Image width={20} height={20} src='/whatsapp.svg' alt='whatsapp' />
            <span dir='ltr'>+966597005245</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image width={20} height={20} src='/whatsapp.svg' alt='whatsapp' />
            <span dir='ltr'>+201090271104</span>
          </div>

          <div className='flex items-center gap-2'>
            <Image width={20} height={20} src='/whatsapp.svg' alt='whatsapp' />
            <span dir='tlr'>+201222234371</span>
          </div>

          <div className='flex items-center gap-2'>
            <Phone className='w-4 h-4' />
            <span dir='ltr'>+20 10 9027 1104</span>
          </div>

          <div className='flex items-center gap-2'>
            <Mail className='w-4 h-4' />
            <span className=''>ahmedEllaboudy@SSA-eg.com</span>
          </div>
        </div>
      </div>

      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-full'></hr>
      <p className='text-center text-sm'>
        جميع الحقوق محفوظة لمكتب الأستاذ أحمد اللبودي للمحاسبة والمراجعة
        والإستشارات المالية والضريبية 2024
      </p>
    </footer>
  );
}
