import Image from "next/image";
import about_bg from "@/public/about.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 min-h-[40svh]    gap-8'>
      <div>
        <h1 className='text-4xl mb-4 font-bold'>
          عن <span className='text-primary'>المكتب</span>
        </h1>

        <p className='text-justify'>
          نحن مكتب متخصص في تقديم حلول مالية ومحاسبية متكاملة تهدف إلى تحقيق
          النجاح والنمو المستدام لعملائنا. بفضل فريقنا المتميز وخبراتنا الواسعة،
          نقدم مجموعة متنوعة من الخدمات المالية والمحاسبية المصممة خصيصًا لتلبية
          احتياجات الشركات والأفراد. سواء كنت تبحث عن إدارة حسابات دقيقة،
          استشارات مالية متخصصة، أو خدمات ضريبية متميزة، نحن هنا لدعمك.
        </p>

        <Button asChild variant={"outline"} className='mt-4 me-2'>
          <Link href={"about-us"}>المزيد عنا</Link>
        </Button>
      </div>

      <div className='relative w-full min-h-[200px] h-[30svh] md:h-[50svh]'>
        <Image
          className='rounded-md'
          alt='Yasa_Ships'
          src={about_bg}
          placeholder='blur'
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
