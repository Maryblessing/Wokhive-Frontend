'use client';
import React from 'react';
import SocialButton from '@/components/UI/SocialButton';
import { NextPage } from 'next';
import Image from 'next/image';
import logo from '@/public/assets/images/svgs/logo.svg';
import Input from '@/components/UI/Input';
import Button from '@/components/UI/Button';
import Link from 'next/link';
import bgOverlay from '@/public/assets/images/svgs/signup_bg.svg';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

type SignupFormProps = {
  userType: 'client' | 'freelancer';
};

const SignUpForm: NextPage<SignupFormProps> = ({ userType }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const signUpSchema = z.object({
    firstName: z.string().min(1, { message: 'First name must not be empty' }),
    lastName: z.string().min(1, { message: 'Last name must not be empty' }),
    email: z.string().email({ message: 'Please enter a valid email' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string().min(8, { message: 'Password must be at least 8 characters' }),
  });

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  type formData = z.infer<typeof signUpSchema>;

  const onSubmit = (data: any) => {
    const { password, confirmPassword } = data as formData;
    if (password !== confirmPassword) {
      setError('confirmPassword', {
        message: 'Passwords do not match',
      });
      return;
    }
    router.push(`/${userType}/onboard`);
    setIsLoading(true);
    console.log(data);
    reset();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className='flex justify-center items-center min-h-screen overflow-hidden'>
      <div className='bg-primary-purple-60 relative overflow-hidden w-[1440px] flex'>
        <div className='bg-white rounded-r-[40px] w-[774px] flex flex-col pt-10 items-center gap-12 min-h-[1024px] relative z-10'>
          <div className='flex w-[478px]'>
            <Image alt='logo' src={logo} />
          </div>

          <div className='flex w-[478px] pb-8 flex-col items-start gap-8'>
            <h3 className='text-gray-900 text-Display-xs font-medium'>Sign up as a {userType}</h3>

            <div className='flex w-full flex-col items-start gap-6'>
              <SocialButton disabled={isLoading} isLoading={isLoading} width='100%' />
              <div className='w-full border relative'>
                <p className='text-gray-900 text-Text-sm px-4 bg-white absolute bottom-[calc(50%-10px)] left-1/2'>or</p>
              </div>

              <form className='flex w-full flex-col items-start gap-8' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col items-start gap-6 w-full'>
                  <p className=' text-gray-900 text-Text-sm'>
                    Sign up with email - Enter your name as it appears on your government issued ID (for easy
                    identification verification)
                  </p>

                  <div className='flex w-full flex-col items-start gap-6'>
                    <div className='flex w-full items-start gap-5'>
                      <Input
                        destructive={!!errors.firstName}
                        disabled={isLoading}
                        label='First name'
                        name='firstName'
                        placeholder='Jane'
                        register={formRegister}
                      />
                      <Input
                        destructive={!!errors.lastName}
                        disabled={isLoading}
                        label='Last name'
                        name='lastName'
                        placeholder='Doe'
                        register={formRegister}
                      />
                    </div>
                    <Input
                      destructive={!!errors.email}
                      disabled={isLoading}
                      inputType='email'
                      label='Email address'
                      name='email'
                      placeholder='janedoe@gmail.com'
                      register={formRegister}
                      width='100%'
                    />
                    <Input
                      destructive={!!errors.password}
                      disabled={isLoading}
                      hintText={errors.password?.message || 'Must be at least 8 characters'}
                      inputType='password'
                      label='Enter password'
                      name='password'
                      placeholder='********'
                      register={formRegister}
                      width='100%'
                    />
                    <Input
                      destructive={!!errors.confirmPassword}
                      disabled={isLoading}
                      hintText={errors.confirmPassword?.message || 'Must be the same password you entered earlier'}
                      inputType='password'
                      label='Confirm password'
                      name='confirmPassword'
                      placeholder='********'
                      register={formRegister}
                      width='100%'
                    />
                  </div>
                </div>
                <Button hierarchy='primary' isLoading={isLoading} size='xl' width='100%'>
                  Create account
                </Button>
              </form>
            </div>

            <p className='w-full text-gray-900 text-Text-md font-medium pt-4'>
              Already have an account?{' '}
              <Link
                className='text-primary-purple-60 font-bold hover:text-primary-milk-70 focus:text-primary-700 transition-all'
                href={`/auth/${userType}/signin`}
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className='flex mt-36 ml-3 gap-5'>
          <div className='w-[31px] h-0.5 bg-[#F9F9F9] mt-7' />
          <div className='flex flex-col gap-2.5 w-[517px] py-2.5 items-start'>
            <h4 className='text-primary-milk-60 text-Display-md font-bold'>Stay Ahead With Wokhive</h4>
            <p className='text-gray-25 text-Text-lg font-medium'>
              Create your Wokhive account to manage your personal projects and connect with talents
            </p>
          </div>
        </div>

        <Image alt='bg overlay' className='absolute top-0 right-0' src={bgOverlay} />
        <Image
          alt='bg img'
          className='absolute bottom-0 right-0'
          height={799}
          src={`/assets/images/${userType}_signup_img.png`}
          width={629}
        />
      </div>
    </section>
  );
};

export default SignUpForm;
