import Link from 'next/link';
import Logo from './Logo';
import twitter from '@/public/assets/images/mdi_twitter.svg';
import linkedin from '@/public/assets/images/mdi_linkedin.svg';
import globe from '@/public/assets/images/ph_globe.svg';
import Image from 'next/image';
import { NextPage } from 'next';

const date: Date = new Date();
const year: number = date.getFullYear();

const Footer: NextPage = () => {
  return (
    <footer className='bg-[#615580]'>
      <div className='max-w-[2040px] mx-auto bg-[#615580] px-20 py-11 text-[#ECEBF0] text-base leading-[30px]'>
        <div className='flex flex-col gap-20'>
          <div className='flex justify-between items-start'>
            <div className='flex flex-col gap-3'>
              <Logo fill='#ECEBF0' />
              <h4>Elevating the freelancing experience</h4>
              <div className='flex gap-2.5 pt-1'>
                <Link href='/'>
                  <Image src={twitter} alt='twitter' />
                </Link>
                <Link href='/'>
                  <Image src={linkedin} alt='linkedin' />
                </Link>
                <Link href='/'>
                  <Image src={globe} alt='globe' />
                </Link>
              </div>
            </div>
            <div className='flex gap-20'>
              <div className='flex flex-col gap-1.5'>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  About us
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Services
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  FAQ
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Contact us
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Blog
                </Link>
              </div>
              <div className='flex flex-col gap-1.5'>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Terms
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Privacy
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Careers
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Sign Up
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Login
                </Link>
              </div>
            </div>
          </div>

          <div className='flex justify-between items-center'>
            <p>© {year} WokHive. All rights reserved.</p>
            <div className='flex gap-4 items-center'>
              <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                Privacy Policy
              </Link>
              <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                Terms of Service
              </Link>
              <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
