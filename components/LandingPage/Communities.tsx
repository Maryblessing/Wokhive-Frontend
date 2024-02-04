import React from 'react';
import Button from '../UI/Button';
import paystack from '@/public/assets/images/svgs/Paystack.svg';
import { NextPage } from 'next';
import Image from 'next/image';

const Communities: NextPage = () => {
  return (
    <section className='p-6 lg:p-20 flex flex-col gap-24 h-[617px] bg-white max-w-[1440px] mx-auto'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10'>
        <div className='flx lg:w-[655px] flex-col items-center gap-2'>
          <h2 className='text-primary-purple-60 text-Display-sm md:text-Display-extra tracking-[-0.66px] font-medium pb-1 self-stretch'>
            Connecting Talents and Communities alike
          </h2>
          <p className='text-secondary text-Text-lg md:text-Text-xl self-stretch tracking-[-0.42px]'>
            We partner with communities to give more talents access to global opportunities
          </p>
        </div>
        <div className='inline-flex flex-col gap-4'>
          <div className='w-[124.8px] h-[48px] lg:w-[312px] lg:h-[120px] relative'>
            <div className='flex items-center justify-center h-12 w-12 lg:w-[120px] lg:h-[120px] rounded-full shrink-0 border-2 lg:border-[5px] border-primary-milk-30 bg-primary-milk-10 absolute left-[76.8px] lg:left-[180px]'>
              <Image
                alt='paystack'
                className='opacity-40 w-[18.4px] h-[18.4px] lg:w-[46px] lg:h-[46px]'
                height={46}
                src={paystack}
                width={46}
              />
            </div>
            <div className='flex items-center justify-center h-12 w-12 lg:w-[120px] lg:h-[120px] rounded-full shrink-0 border-2 lg:border-[5px] border-secondary-purple-30 bg-secondary-purple-10 absolute left-[38.4px] lg:left-[90px]'>
              <Image
                alt='paystack'
                className='opacity-40 w-[18.4px] h-[18.4px] lg:w-[46px] lg:h-[46px]'
                height={46}
                src={paystack}
                width={46}
              />
            </div>
            <div className='flex items-center justify-center h-12 w-12 lg:w-[120px] lg:h-[120px] rounded-full shrink-0 border-2 lg:border-[5px] border-primary-purple-20 bg-primary-purple-10 absolute left-0'>
              <Image
                alt='paystack'
                className='opacity-40 w-[18.4px] h-[18.4px] lg:w-[46px] lg:h-[46px]'
                height={46}
                src={paystack}
                width={46}
              />
            </div>
          </div>
          <p className='text-primary-purple-20 font-whyte md:text-Text-xl'>
            Roadtrip Community<span className='inline lg:hidden'>, asa cortiere</span> and lots more
          </p>
        </div>
      </div>

      <div className='flex gap-11 items-center justify-center'>
        <p className='text-secondary text-Text-md md:text-Text-lg'>
          Sign up today and get the full community experience
        </p>
        <div className=''>
          <Button hierarchy='primary' href='/coming-soon' size='md'>
            Sign up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Communities;
