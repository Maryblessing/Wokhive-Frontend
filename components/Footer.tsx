import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import twitter from '@/public/assets/images/svgs/icons/mdi_twitter.svg';
import linkedin from '@/public/assets/images/svgs/icons/mdi_linkedin.svg';
import globe from '@/public/assets/images/svgs/icons/ph_globe.svg';
import Image from 'next/image';
import { NextPage } from 'next';

const date: Date = new Date();
const year: number = date.getFullYear();

const Footer: NextPage = () => {
  return (
    <footer className='bg-[#615580]'>
      <div className='max-w-[1440px] mx-auto bg-[#615580] px-6 lg:px-20 py-11 text-[#ECEBF0] text-base leading-[30px]'>
        <div className='flex flex-col gap-10 lg:gap-20'>
          <div className='flex flex-col lg:flex-row gap-16  lg:gap-0 justify-between items-start'>
            <div className='flex flex-col gap-3'>
              <Logo fill='#ECEBF0' />
              <h4>Elevating the freelancing experience</h4>
              <div className='flex gap-2.5 pt-1'>
                <Link href='/'>
                  <Image alt='twitter' src={twitter} />
                </Link>
                <Link href='/'>
                  <Image alt='linkedin' src={linkedin} />
                </Link>
                <Link href='/'>
                  <Image alt='globe' src={globe} />
                </Link>
              </div>
            </div>
            <div className='flex flex-col md:flex-row gap-10 md:gap-[200px] lg:gap-20'>
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
                <Link className='hover:text-primary-milk-60 transition-all' href='/auth/signup'>
                  Sign Up
                </Link>
                <Link className='hover:text-primary-milk-60 transition-all' href='/'>
                  Login
                </Link>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between lg:items-center'>
            <p className='order-2 lg:order-1'>© {year} WokHive. All rights reserved.</p>
            <div className='flex flex-col md:flex-row gap-4 lg:items-center'>
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
