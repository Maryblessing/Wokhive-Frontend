'use client';
import React from 'react';
import Logo from './Logo';
import { NextPage } from 'next';
import Button from './UI/Button';
import { useEffect, useRef, useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { RiHome6Line } from 'react-icons/ri';
import Link from 'next/link';

const Navbar: NextPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav className='bg-white lg:bg-primary-purple-10 sticky top-0 z-50 m-auto'>
      <div className='max-w-[1440px] w-full flex justify-between items-center py-4 px-6 lg:px-20 m-auto relative'>
        <Link href='/'>
          <Logo fill='#423366' />
        </Link>
        <div className='lg:hidden relative'>
          <button className='absolute z-20 right-6 -top-4' onClick={() => setMobileMenuOpen((prevState) => !prevState)}>
            <svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M3 12H15M3 6H21M3 18H21'
                stroke='black'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
              />
            </svg>
          </button>
        </div>
        <div
          className={`absolute top-16 lg:top-0 lg:basis-[66%] left-0 w-full h-screen bg-white flex flex-col gap-5 items-start p-2 pt-10 lg:pt-2 transform transition-transform duration-200 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:relative lg:flex lg:flex-row lg:items-center lg:justify-between lg:bg-transparent lg:h-auto`}
        >
          <div className='flex flex-col lg:flex-row gap-5 lg:items-center text-[#3A383F] font-medium'>
            <Button
              hierarchy='link'
              href='/coming-soon'
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              About us
            </Button>
            <Button
              hierarchy='link'
              href='/coming-soon'
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              Services
            </Button>
            <Button
              hierarchy='link'
              href='/coming-soon'
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              Pricing
            </Button>
          </div>
          <div ref={dropdownRef} className='flex flex-col lg:flex-row gap-5 relative pl-3'>
            <Button
              hierarchy='secondary'
              href='/coming-soon'
              size='sm'
              onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            >
              Sign up
            </Button>
            <Button hierarchy='primary' size='sm' onClick={() => setMobileMenuOpen((prevState) => !prevState)}>
              Sign in
            </Button>
            {dropdownOpen && (
              <div className='w-[230px] absolute top-full lg:right-0 mt-4 bg-white rounded shadow-shadow/lg py-1 flex flex-col justify-start border border-gray-200'>
                <Button
                  hierarchy='link'
                  href='/coming-soon'
                  leftIcon={<BiUser className='text-xl' />}
                  width='100%'
                  onClick={() => setMobileMenuOpen((prevState) => !prevState)}
                >
                  Sign in as Freelancer
                </Button>
                <span className='inline-block border border-gray-200 w-full' />
                <Button
                  hierarchy='link'
                  href='/coming-soon'
                  leftIcon={<RiHome6Line className='text-xl' />}
                  width='100%'
                  onClick={() => setMobileMenuOpen((prevState) => !prevState)}
                >
                  Sign in as Client
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
