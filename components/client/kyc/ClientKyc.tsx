import React from 'react';
import Kyc from '@/components/kyc/Kyc';
import { NextPage } from 'next';

const ClientKyc: NextPage = () => {
  return <Kyc type='client' />;
};

export default ClientKyc;
