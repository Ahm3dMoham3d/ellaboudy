import { Button } from "@/components/ui/button";
import hero_bg from "@/public/hero.jpg";
import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className='text-center'>
      <div>
        <h1 className='text-5xl mb-6 lg:text-6xl font-bold '>
          شريكك <span className='text-primary'>الموثـــــــــــــــــوق</span>{" "}
          للنجاح المالي
        </h1>

        <p className='mb-3 mt-2 text-xl text-foreground/80'>
          خدمات محاسبية، ضريبية واستشارية شاملة تناسب احتياجاتك
        </p>
        <div className='flex flex-wrap gap-4 mb-4 justify-center'>
          <Button asChild>
            <Link href={"services"}>خدماتنا</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href={"/#contact-us"}>أتصل بنا</Link>
          </Button>
        </div>
      </div>

      <div className='relative w-full min-h-[200px] h-[30svh] md:h-[50svh] rounded-md'>
        <Image
          className='rounded-md'
          alt='Yasa_Ships'
          src={hero_bg}
          priority
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
