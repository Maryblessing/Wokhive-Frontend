import PrimaryButton from '../UI/PrimaryButton';
import CustomCommunity from './CustomCommunity';
import { NextPage } from 'next';

const Communities: NextPage = () => {
  return (
    <section className='p-20 flex flex-col gap-20'>
      <div>
        <h2 className='text-primary-purple-60 text-4xl text-center pb-1'>Connecting Talents and Communities alike</h2>
        <p className='text-secondary text-center text-xl'>
          We partner with communities to give more talents access to global opportunities
        </p>
      </div>
      <div className='flex flex-col gap-32 items-center'>
        <div className='flex gap-4 flex-wrap justify-center'>
          <CustomCommunity>Asa Cortiere</CustomCommunity>
          <CustomCommunity>Roadtrip Community</CustomCommunity>
          <CustomCommunity>Asa Cortiere</CustomCommunity>
          <CustomCommunity className='bg-secondary-lemon-10'>Roadtrip Community</CustomCommunity>
          <CustomCommunity>Asa Cortiere</CustomCommunity>
          <CustomCommunity className='bg-secondary-lemon-10'>Roadtrip Community</CustomCommunity>
          <CustomCommunity className='bg-primary-milk-10'>Asa Cortiere</CustomCommunity>
          <CustomCommunity>Roadtrip Community</CustomCommunity>
          <CustomCommunity>Asa Cortiere</CustomCommunity>
        </div>
        <div className='flex gap-11 items-center'>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Sign up today and get the full community experience'
            className='text-secondary placeholder:text-secondary text-base leading-[30px] w-[400px] outline-none focus:outline-none
            '
          />
          <PrimaryButton>Sign up</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default Communities;
