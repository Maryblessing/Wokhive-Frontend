import Link from 'next/link';
import Logo from './Logo';
import PrimaryButton from './UI/PrimaryButton';
import { NextPage } from 'next';
import SecondaryButton from './UI/SecondaryButton';

const Navbar: NextPage = () => {
  return (
    <nav className='bg-[#FCFCFC] flex justify-between items-center py-4 px-20 sticky top-0 z-50 m-auto'>
      <Logo fill='#423366' />
      <div className='flex gap-5 items-center text-[#3A383F] font-medium'>
        <Link className='transition-all hover:text-primary-milk-70 hover:border-b border-primary-milk-70' href='/'>
          About us
        </Link>
        <Link className='transition-all hover:text-primary-milk-70 hover:border-b border-primary-milk-70' href='/'>
          Services
        </Link>
        <Link className='transition-all hover:text-primary-milk-70 hover:border-b border-primary-milk-70' href='/'>
          Pricing
        </Link>
      </div>
      <div className='flex gap-5'>
        <PrimaryButton>Sign in</PrimaryButton>
        <SecondaryButton>Sign up</SecondaryButton>
      </div>
    </nav>
  );
};

export default Navbar;
