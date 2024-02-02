import React from 'react';
import { StepsProps } from '@/@types';
import Input from '@/components/UI/Input';
import { NextPage } from 'next';
import { useClientOnboarding } from '@/context/ClientOnboardingContext';

const StepOne: NextPage<StepsProps> = ({ onComplete }) => {
  const { personalInfo, setPersonalInfo } = useClientOnboarding();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedPersonalInfo = { ...personalInfo, [e.target.name]: e.target.value };
    setPersonalInfo(updatedPersonalInfo);
    onComplete(
      updatedPersonalInfo.firstName.length > 0 &&
        updatedPersonalInfo.lastName.length > 0 &&
        updatedPersonalInfo.age.length > 0 &&
        updatedPersonalInfo.gender.length > 0,
    );
  };

  return (
    <div className='flex flex-col items-start gap-10 w-full'>
      <Input
        label='First name'
        name='firstName'
        placeholder='Jane'
        value={personalInfo.firstName}
        width='100%'
        onChange={handleChange}
      />
      <Input
        label='Last name'
        name='lastName'
        placeholder='Doe'
        value={personalInfo.lastName}
        width='100%'
        onChange={handleChange}
      />

      <div className='flex gap-5 w-[482px] items-start'>
        <Input label='Age' name='age' value={personalInfo.age} onChange={handleChange} />
        <Input label='Gender' name='gender' value={personalInfo.gender} onChange={handleChange} />
      </div>
    </div>
  );
};

export default StepOne;
