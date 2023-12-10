import Image from 'next/image';
import PrimaryButton from '../UI/PrimaryButton';
import CTAOrangeFlower from '@/public/assets/images/cta_orange_flower.svg';
import CTABlueFlower from '@/public/assets/images/cta_blue_flower.svg';
import { NextPage } from 'next';

const CTA: NextPage = () => {
  return (
    <section className='py-[140px] px-20 flex'>
      <div className='bg-[#F9F9FA] w-full flex items-end relative rounded-t-2xl h-[550px] max-w-[1800px] m-auto'>
        <Image src={CTAOrangeFlower} alt='cta flower' className='absolute top-5 left-[40%] ' />
        <Image src={CTABlueFlower} alt='cta flower' className='absolute top-[25%] left-[30px]' />
        <Image src={CTABlueFlower} alt='cta flower' className='absolute bottom-[45%] left-[60%]' />
        <Image
          src={CTABlueFlower}
          alt='cta flower'
          width={200}
          height={200}
          className='absolute bottom-[45%] right-[56px]'
        />
        <div className='flex justify-between p-14 items-center w-full'>
          <div className='flex flex-col gap-2'>
            <h4 className='text-primary-purple-60 text-4xl font-medium'>
              Take your career to the next level. <br />
              Join the Booming pool of freelancers today.
            </h4>
            <p className='text-secondary text-xl self-stretch'>
              Discover new clients and manage your gigs effectively on <br /> WokHive.
            </p>
          </div>
          <PrimaryButton>Sign up Today</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default CTA;
