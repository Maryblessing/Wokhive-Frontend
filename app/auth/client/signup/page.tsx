import React from 'react';
import SignUpForm from '@/components/auth/SignUpForm';
import { NextPage } from 'next';

const ClientSignUp: NextPage = () => {
  return <SignUpForm userType='client' />;
};

export default ClientSignUp;
