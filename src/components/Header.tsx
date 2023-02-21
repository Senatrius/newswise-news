import Image from 'next/image';
import React from 'react';

export const Header = () => {
  return (
    <header className='py-4 md:py-8'>
      <div className='wrapper flex items-center justify-between gap-4'>
        <Image
          className='max-w-[25%]'
          src='/logo.svg'
          alt='News Wise logo'
          width={235}
          height={62}
          priority
        />
        <Image
          className='max-w-[60%]'
          src='/ad.jpg'
          alt=''
          width={720}
          height={90}
          priority
        />
      </div>
    </header>
  );
};
