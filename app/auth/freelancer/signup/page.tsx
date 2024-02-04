import React from 'react';
import SignUpForm from '@/components/auth/SignUpForm';
import { NextPage } from 'next';

const FreelancerSignupPage: NextPage = () => {
  return <SignUpForm userType='freelancer' />;
};

export default FreelancerSignupPage;
