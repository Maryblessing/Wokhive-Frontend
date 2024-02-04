'use client';
import React from 'react';
import { NextPage } from 'next';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import ClientOnboardingStartScreen from './ClientOnboardingStartScreen';
import { useState } from 'react';
import Logo from '@/components/Logo';
import Button from '@/components/UI/Button';
import { TickCircle } from 'iconsax-react';
import { useRouter } from 'next/navigation';

const profileSteps = ['Personal information', 'Career information', 'Bank information'];

const ClientOnboard: NextPage = () => {
  const router = useRouter();
  const [isStepOneComplete, setIsStepOneComplete] = useState(false);
  const [isStepTwoComplete, setIsStepTwoComplete] = useState(false);
  const [isStepThreeComplete, setIsStepThreeComplete] = useState(false);
  const [step, setStep] = useState(1);

  const isNextButtonDisabled = () => {
    switch (step) {
      case 1:
        return !isStepOneComplete;
      case 2:
        return !isStepTwoComplete;
      case 3:
        return !isStepThreeComplete;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (step === 3) {
      router.push('/client/onboard/kyc');
      return;
    }

    setStep((prevStep) => prevStep + 1);
  };

  if (step === 0) {
    return <ClientOnboardingStartScreen onStart={() => setStep(1)} />;
  }

  const handleSkip = () => {
    router.push('/client/onboard/kyc');
  };

  return (
    <>
      <div className='my-8 max-w-[1440px] mx-auto overflow-hidden flex flex-col justify-start px-4'>
        <div className='basis-[220px]'>
          <Logo fill='#423366' />
          <div className='flex flex-col w-full items-center gap-20 mt-14'>
            <div className='w-full flex flex-col items-center gap-8'>
              <div className='flex flex-col items-center gap-2'>
                <h3 className='text-gray-900 text-center text-Display-md font-medium'>Profile set up</h3>
                <p className='text-gray-700 text-center w-[491px]'>
                  Kindly fill in your profile details so clients can reach you faster.
                </p>
              </div>
              <div className='flex gap-4 items-start justify-between w-[736px]'>
                {profileSteps.map((info, index) => (
                  <div key={index} className='flex w-[242px] flex-col items-center gap-4'>
                    {step > index + 1 ? (
                      <span className='w-8 h-8 bg-secondary-purple-10 rounded-lg flex justify-center items-center'>
                        <TickCircle color='#27AE60' />
                      </span>
                    ) : (
                      <span
                        className={`w-8 h-8 rounded-lg ${
                          index + 1 === step ? 'bg-primary-purple-60' : 'bg-secondary-purple-10'
                        }`}
                      />
                    )}
                    <p
                      className={`${index + 1 === step ? 'text-gray-900 font-semibold' : 'text-gray-500'} text-Text-xl`}
                    >
                      {info}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='flex w-[485px] flex-col items-start gap-20'>
              {step === 1 && <StepOne onComplete={setIsStepOneComplete} />}
              {step === 2 && <StepTwo onComplete={setIsStepTwoComplete} />}
              {step === 3 && <StepThree onComplete={setIsStepThreeComplete} />}

              <div className='flex w-[485px] flex-col items-start gap-4'>
                <Button
                  disabled={step !== 3 ? isNextButtonDisabled() : false}
                  size='2xl'
                  width='100%'
                  onClick={handleNext}
                >
                  Save and continue
                </Button>

                <Button
                  disabled={step !== 3 ? isNextButtonDisabled() : false}
                  hierarchy='secondary'
                  size='2xl'
                  width='100%'
                  onClick={handleSkip}
                >
                  Save and exit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientOnboard;
