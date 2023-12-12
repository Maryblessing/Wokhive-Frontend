import Image from 'next/image';
import PrimaryButton from '../UI/PrimaryButton';
import heroImage from '@/public/assets/images/heroImg.png';
import { NextPage } from 'next';

const HeroPage: NextPage = () => {
  return (
    <>
      <section className='bg-[#FCFCFC] flex flex-col justify-center gap-16 h-screen max-h-[870px] overflow-hidden'>
        <div className='flex flex-col basis-[50vh] justify-end items-center'>
          <h1 className='text-primary-purple-60 text-6xl font-medium pb-6 text-center'>
            Empower your Freelancing career with wokhive
          </h1>
          <p className='w-[738px] text-center text-zinc-600 text-xl leading-8 font-normal pb-10'>
            Connect with new clients, streamline payments and manage tasks effectively. Take control of your freelance
            career today
          </p>

          <PrimaryButton>Sign up Now</PrimaryButton>
        </div>
        <div className='relative flex justify-center min-h-[400px]'>
          <Image
            src={heroImage}
            width={844}
            height={600}
            alt='hero'
            className='heroPage-img flex justify-center m-auto bg-no-repeat bg-cover rounded-2xl absolute top-0'
          />
          <div className='hero-img-bottom-gradient px-[100px] absolute z-20 bottom-0 w-[1031px]' />
        </div>
      </section>
    </>
  );
};

export default HeroPage;
