import React from 'react';
import { StepsProps } from '@/@types';
import Input from '@/components/UI/Input';
import { NextPage } from 'next';
import { useClientOnboarding } from '@/context/ClientOnboardingContext';

const StepThree: NextPage<StepsProps> = ({ onComplete }) => {
  const { bankInfo, setBankInfo } = useClientOnboarding();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedBankInfo = { ...bankInfo, [e.target.name]: e.target.value };
    setBankInfo(updatedBankInfo);
    onComplete(updatedBankInfo.bankName.length > 0 && updatedBankInfo.accountNumber.length > 0);
  };

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <Input
        label='Bank name'
        name='bankName'
        placeholder='Wema Bank'
        value={bankInfo.bankName}
        width='100%'
        onChange={handleChange}
      />
      <Input
        label='Bank account number'
        name='accountNumber'
        placeholder='0254414110'
        value={bankInfo.accountNumber}
        width='100%'
        onChange={handleChange}
      />
    </div>
  );
};

export default StepThree;
