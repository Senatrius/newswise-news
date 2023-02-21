import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DesktopLinks, MobileLinks, TabletLinks } from './NavLinks';

export const Navigation = () => {
  return (
    <nav className='wrapper flex flex-wrap bg-navBg text-white'>
      <DesktopLinks />
      <TabletLinks />
      <MobileLinks />
    </nav>
  );
};
