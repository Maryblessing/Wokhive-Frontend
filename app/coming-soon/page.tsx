import React from 'react';
import { NextPage } from 'next';
import Navbar from '@/components/Navbar';
import comingSoonImg from '@/public/assets/images/svgs/comingSoon.svg';
import Image from 'next/image';
import Button from '@/components/UI/Button';

const ComingSoon: NextPage = () => {
  return (
    <>
      <Navbar />
      <section className='bg-primary-purple-10 p-5 min-h-[calc(100vh-100px)] flex justify-center items-center'>
        <div className='max-w-[1440px] flex flex-col justify-center items-center gap-14'>
          <Image alt='Coming Soon' src={comingSoonImg} />
          <div className='flex flex-col justify-center items-center gap-8 max-w-[700px]'>
            <h1 className='text-primary-purple-80 text-Display-md sm:text-Display-xl font-bold text-center'>
              Coming Soon...
            </h1>
            <p className='text-center text-gray-800 font-medium text-Text-md sm:text-Text-xl'>
              We’re sorry for the inconvenience, this page is still in the kitchen. Our chefs would feed you with the
              best experience. In the mean time navigate through our homepage. Back to homepage
            </p>
            <Button href='/' size='xl'>
              Go to homepage
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
