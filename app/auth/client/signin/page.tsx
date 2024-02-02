import React from 'react';
import SignInForm from '@/components/auth/SignInForm';

import { NextPage } from 'next';

const ClientSignInPage: NextPage = () => {
  return <SignInForm userType='client' />;
};

export default ClientSignInPage;
