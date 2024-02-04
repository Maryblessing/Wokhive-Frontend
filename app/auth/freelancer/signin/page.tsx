import React from 'react';
import SignInForm from '@/components/auth/SignInForm';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Freelancer Sign In',
  description: 'Sign in as a freelancer',
};

const FreelancerSignInPage: NextPage = () => {
  return (
    <>
      <SignInForm userType='freelancer' />
    </>
  );
};

export default FreelancerSignInPage;
