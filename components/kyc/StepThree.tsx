import React from 'react';
import { NextPage } from 'next';
import freelancerImage from '@/public/assets/images/svgs/freelancerVerified.svg';
import clientImage from '@/public/assets/images/svgs/clientVerified.svg';
import Image from 'next/image';
import Button from '../UI/Button';

const KycStepThree: NextPage<{
  type: 'client' | 'freelancer';
}> = ({ type }) => {
  return (
    <div className='flex flex-col gap-10 items-center w-full'>
      {type === 'client' && <Image alt='Kyc' height={120} src={clientImage} width={120} />}
      {type === 'freelancer' && <Image alt='Kyc' height={120} src={freelancerImage} width={120} />}

      <Button size='xl' width='100%'>
        Close
      </Button>
    </div>
  );
};

export default KycStepThree;
