import React from 'react';

export const NewsBar = () => {
  return (
    <div className='bg-navBg py-3 text-small text-white'>
      <div className='wrapper flex items-center justify-between'>
        <p>Latest news placeholder here...</p>
        <div className='flex items-center'>
          <div className='mx-4 -my-3 hidden min-h-full w-[1px] self-stretch bg-divider sm:inline-block'></div>
          <p className='hidden sm:inline-block '>20XX, Janembruary 99th</p>
          <div className='mx-4 -my-3 min-h-full w-[1px] self-stretch bg-divider'></div>
          <p>- XX°C</p>
        </div>
      </div>
    </div>
  );
};
