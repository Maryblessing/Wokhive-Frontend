import community from '@/public/assets/images/community.svg';
import contract from '@/public/assets/images/contract.svg';
import Image from 'next/image';
import { NextPage } from 'next';

const WhyWokhive: NextPage = () => {
  return (
    <>
      <section className='py-20 max-w-[2000px] m-auto'>
        <h2 className='text-primary-purple-60 text-4xl font-medium text-center'>Why use Wokhive</h2>
        <p className='text-secondary text-center text-xl'>
          Freelancers are switching to Wokhive for these benefits and more
        </p>
        <div className='grid grid-cols-12 gap-9 py-16 px-20'>
          <div className='rounded-lg border-[0.5px] border-secondary-lemon-50 bg-secondary-lemon-10 p-11 gap-28 flex items-center justify-evenly col-span-8'>
            <div className='flex flex-col gap-4'>
              <h3 className='text-primary-purple-60 text-4xl font-medium'>A community driven experience</h3>
              <p className='text-secondary text-xl'>
                Get connected to communities and improve your network to make your freelancing journey easier
              </p>
            </div>
            <Image src={community} width={282} height={226} alt='community' />
          </div>
          <div className='rounded-lg border-[0.4px] border-primary-milk-50 bg-primary-milk-10 p-10 flex flex-col gap-5 col-span-4'>
            <h3 className='text-primary-purple-60 text-4xl font-medium'>Organise your contracts easily</h3>
            <p className='text-secondary text-xl'>
              Get connected to communities and improve your network to make your freelancing journey easier
            </p>
          </div>
          <div className='rounded-lg border-[0.5px] border-[#625580]/30 bg-[#cdc3f3] p-10 flex flex-col gap-5 row-span-2 col-span-5'>
            <h3 className='text-primary-purple-60 text-4xl font-medium'>Get and manage gigs all from one place</h3>
            <p className='text-secondary text-xl'>
              Get connected to communities and improve your network to make your freelancing journey easier
            </p>
          </div>
          <div className='rounded-lg border-[0.5px] border-secondary-purple-50 bg-secondary-purple-10 flex p-11 gap-10 items-center justify-evenly row-span-2 col-span-7'>
            <div className='flex flex-col gap-6'>
              <h3 className='text-primary-purple-60 text-4xl font-medium pr-10'>Organise your contracts easily</h3>
              <p className='text-secondary text-xl'>
                Get connected to communities and improve your network to make your freelancing journey easier
              </p>
            </div>
            <Image src={contract} width={282} height={226} alt='contract' />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyWokhive;
