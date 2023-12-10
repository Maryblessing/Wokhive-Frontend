import Image from 'next/image';
import PrimaryButton from '../UI/PrimaryButton';
import newsletter from '@/public/assets/images/newsletter.svg';
import newsletterCircle from '@/public/assets/images/newsletter_circle.svg';
import newsletterEllipse from '@/public/assets/images/newsletter_ellipse.svg';
import orangeFlower from '@/public/assets/images/cta_orange_flower.svg';
import whiteFlower from '@/public/assets/images/white_flower.svg';
import { NextPage } from 'next';

const JoinProgram: NextPage = () => {
  return (
    <>
      <section className='px-20 pt-[91px] pb-36 flex justify-center'>
        <div className='w-[580px] h-[576px] bg-[#F7F5FB] rounded-l-2xl relative overflow-hidden'>
          <Image src={newsletterEllipse} alt='newsletter' className='absolute bottom-0 left-0 z-20' />
          <Image src={newsletterCircle} alt='newsletter' className='absolute top-0 left-0 z-10' />
          <Image src={newsletter} alt='newsletter' className='absolute top-[75px] left-0 z-30' />
          <svg
            className='absolute z-30 bottom-[30%]'
            xmlns='http://www.w3.org/2000/svg'
            width='146'
            height='94'
            viewBox='0 0 146 94'
            fill='none'
          >
            <path d='M0 0L146 32V52L0 94V0Z' fill='#DAD1FF' />
          </svg>
        </div>
        <div className='bg-[#615580] flex flex-col pl-24 pr-16 justify-center gap-10 basis-[50%] min-w-[550px] rounded-r-2xl relative max-w-[1007px]'>
          <Image src={orangeFlower} alt='flower' className='absolute top-0 right-0 z-10 rotate-[30deg]' />
          <Image src={whiteFlower} alt='flower' className='absolute bottom-0 right-0 z-10' />
          <div>
            <h2 className='text-white text-4xl leading-[51px] font-medium pb-2'>Join Wokhive’s Early Access Program</h2>
            <p className='text-primary-purple-10 text-xl'>
              Become one of our first few members and get access to exclusive deals, test new features and more.
            </p>
          </div>
          <div className='flex items-center justify-between bg-white rounded-lg pl-4 pr-2 py-2'>
            <input
              type='text'
              placeholder='Enter your email address'
              className='text-[#908F8F] text-base placeholder:text-[#908F8F] h-16
              outline-none focus:outline-none
              '
            />
            <PrimaryButton>Join the Program</PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinProgram;
