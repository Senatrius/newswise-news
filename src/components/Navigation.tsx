'use client';

import React from 'react';
import { DesktopLinks, MobileLinks } from './NavLinks';

export const Navigation = () => {
  return (
    <nav className='wrapper flex flex-wrap bg-navBg text-white'>
      <DesktopLinks />
      <MobileLinks />
    </nav>
  );
};
