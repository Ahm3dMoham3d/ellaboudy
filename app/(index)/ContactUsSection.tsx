import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ContactUsSection() {
  return (
    <div id='contact-us' className='scroll-mt-20'>
      <h1 className='text-4xl font-bold mt-10'>
        تواصل <span className='text-primary'>معنا</span>
      </h1>
      <div className='grid gap-4 md:grid-cols-2 mt-8'>
        <div className='flex flex-col gap-4'>
          <div className='items-center gap-2 grid grid-cols-1'>
            <div className='flex items-center gap-2'>
              <Image
                width={20}
                height={20}
                src='/whatsapp.svg'
                alt='whatsapp'
              />
              تواصل معنا علي واتساب{" "}
            </div>
            <div className='flex flex-wrap gap-4'>
              <a href='https://wa.me/+966597005245' target='_blank'>
                <span dir='ltr' className='text-primary'>
                  +966597005245
                </span>
              </a>
              <a href='https://wa.me/+201090271104' target='_blank'>
                <span dir='ltr' className='text-primary'>
                  +201090271104
                </span>
              </a>
              <a href='https://wa.me/+201222234371' target='_blank'>
                <span dir='ltr' className='text-primary'>
                  +201222234371
                </span>
              </a>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <Phone className='w-4 h-4' />
            <a href='tel:+201090271104'>
              أتصل بنا{" "}
              <span dir='ltr' className='text-primary'>
                +20 10 9027 1104
              </span>{" "}
            </a>
          </div>

          <div className='flex items-center gap-2'>
            <Mail className='w-4 h-4' />
            <a
              className='text-md'
              href='mailto:ahmedellaboudy@eg-ellaboudy.com'
            >
              راسلنا علي البريد{" "}
              <span className='text-primary'>
                ahmedellaboudy@eg-ellaboudy.com
              </span>
            </a>
          </div>
        </div>

        <iframe
          className='rounded-md w-full'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55299.78953234815!2d32.50508856025753!3d29.97262261867435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1456259cc4e3af6f%3A0xf7478ea05b1d9dfc!2sSuez%2C%20Suez%20Governorate%208141254!5e0!3m2!1sen!2seg!4v1733987319561!5m2!1sen!2seg'
          height='450'
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
}
