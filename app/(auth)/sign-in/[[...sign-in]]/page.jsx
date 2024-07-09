import { SignIn } from "@clerk/nextjs";

import Image from 'next/image'

export default function SignInPage() {
  return (
    <section className="!bg-white">
      <div className="lg:grid lg:min-h-screen bg-[#FAF9F6] lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://i.ibb.co/4YVvWjp/bg-12.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              <Image src={'/logo.svg'} width={40} height={40} style={{ width: '40px', height: '40px' }} alt='logo' />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Interview Hub
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Mock video interviews for the jobs you are applying to with useful feedback.
            </p>
          </div>
        </section>

        <div
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 !bg-white"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden mb-8">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <Image src={'/logo.svg'} width={60} height={60} style={{ width: '60px', height: '60px' }} alt='logo' />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Interview Hub
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Mock video interviews for the jobs you are applying to with useful feedback.
              </p>
            </div>

            <div className="flex justify-center">
              <SignIn />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
