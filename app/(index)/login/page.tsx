import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "تسجيل دخول",
};

export default function page() {
  return (
    <>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                تسجيل الدخول
              </h1>
              <form className='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    الحساب
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='password'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    كلمة المرور
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  />
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'></div>
                  </div>
                  <a
                    href='#'
                    className='text-sm font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    نسيت كلمة المرور ؟
                  </a>
                </div>
                <Button className='w-full' type='submit'>
                  دخول
                </Button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  لا تمتلك حساب بعد?{" "}
                  <a
                    href='#'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    تسجيل حساب
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
