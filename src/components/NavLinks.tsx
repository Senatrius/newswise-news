'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const categories = [
  'business',
  'entertainment',
  'sports',
  'politics',
  'technology',
  'science',
  'health'
];

export const DesktopLinks = () => {
  return (
    <ul className='hidden lg:flex'>
      <Link
        className='flex aspect-square min-h-[3.125rem] items-center justify-center bg-primary hover:brightness-150 focus:brightness-150'
        href='/'>
        <Image
          src='/home.svg'
          alt=''
          width={27}
          height={24}
        />
      </Link>
      {categories.map(category => (
        <Link
          className='inline-block border-r border-divider py-4 px-6 text-center text-nav capitalize hover:bg-primary focus:bg-primary'
          key={category}
          href={category}>
          {category}
        </Link>
      ))}
    </ul>
  );
};

export const TabletLinks = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  return (
    <>
      <ul className='hidden md:flex lg:hidden'>
        <Link
          className='flex aspect-square min-h-[3.125rem] items-center justify-center bg-primary hover:brightness-150 focus:brightness-150'
          href='/'>
          <Image
            src='/home.svg'
            alt=''
            width={27}
            height={24}
          />
        </Link>
        {categories.slice(0, 4).map(category => (
          <Link
            className='inline-block border-r border-divider py-4 px-6 text-center text-nav capitalize hover:bg-primary focus:bg-primary'
            key={category}
            href={category}>
            {category}
          </Link>
        ))}
        <div className='relative'>
          <button
            aria-label='Show more menu items'
            onClick={() => setShowDropdown(!showDropdown)}
            className='flex aspect-square min-h-[3.125rem] items-center justify-center border-r border-divider hover:bg-primary focus:bg-primary'>
            <Image
              src='/more.svg'
              alt=''
              width={5}
              height={24}
            />
          </button>
          {showDropdown && (
            <ul className='absolute right-0 mt-1 flex flex-col items-end bg-navBg'>
              {categories.slice(-3).map(category => (
                <Link
                  onClick={() => setShowDropdown(false)}
                  className='inline-block w-full border-b border-divider py-4 px-6 text-right text-nav capitalize hover:bg-primary focus:bg-primary'
                  key={category}
                  href={category}>
                  {category}
                </Link>
              ))}
            </ul>
          )}
        </div>
      </ul>
    </>
  );
};

export const MobileLinks = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <div className='relative flex w-full justify-between md:hidden'>
      <Link
        className='flex aspect-square min-h-[3.125rem] items-center justify-center bg-primary hover:brightness-150 focus:brightness-150'
        href='/'>
        <Image
          src='/home.svg'
          alt=''
          width={27}
          height={24}
        />
      </Link>
      <button
        aria-label='Show mobile menu'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className='relative flex aspect-square min-h-[3.125rem] items-center justify-center border-l border-divider hover:bg-primary focus:bg-primary lg:hidden'>
        <Image
          src='/menu.svg'
          alt=''
          width={27}
          height={24}
        />
      </button>
      {showMobileMenu && (
        <ul className='absolute top-[3.25rem] bg-navBg'>
          {categories.map(category => (
            <Link
              onClick={() => setShowMobileMenu(false)}
              className='inline-block w-full border-b border-divider py-4 px-6 text-center text-nav capitalize hover:bg-primary focus:bg-primary'
              key={category}
              href={category}>
              {category}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};
