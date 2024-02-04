import React from 'react';
import { NextPage } from 'next';
import freelancerImage from '@/public/assets/images/svgs/freelancerKycIcon.svg';
import clientImage from '@/public/assets/images/svgs/clientKycIcon.svg';
import Image from 'next/image';
import Button from '../UI/Button';

const KycStepThree: NextPage<{
  type: 'client' | 'freelancer';
}> = ({ type }) => {
  return (
    <div className='flex flex-col gap-10 items-center w-full'>
      <Image
        alt='Kyc'
        height={120}
        src={type === 'client' ? clientImage : type === 'freelancer' && freelancerImage}
        width={120}
      />

      <Button size='xl' width='100%'>
        Close
      </Button>
    </div>
  );
};

export default KycStepThree;
