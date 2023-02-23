import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Category = ({ category }: { category: string }) => {
  return (
    <section>
      <SectionHeading heading={category} />
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <div className='col-span-1'>
          <picture className='mb-4 block aspect-[3/2] max-h-[12rem] w-full bg-navBg'>
            a
          </picture>
          <h3 className='mb-1.5 text-card font-bold'>Placeholder title</h3>
          <p className='line-clamp-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            non error sed est animi assumenda? Placeholder description.
          </p>
        </div>
        <div className='col-span-1 flex flex-col gap-4'>
          <div className='flex gap-4'>
            <picture className='block aspect-square w-full max-w-[5rem] grow bg-navBg'></picture>
            <div className='grow'>
              <h3 className='mb-1.5 text-card font-bold'>Placeholder title</h3>
              <p className='line-clamp-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                architecto? Placeholder description.
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <picture className='block aspect-square w-full max-w-[5rem] grow bg-navBg'></picture>
            <div className='grow'>
              <h3 className='mb-1.5 text-card font-bold'>Placeholder title</h3>
              <p className='line-clamp-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                architecto? Placeholder description.
              </p>
            </div>
          </div>
          <div className='flex gap-4'>
            <picture className='block aspect-square w-full max-w-[5rem] grow bg-navBg'></picture>
            <div className='grow'>
              <h3 className='mb-1.5 text-card font-bold'>Placeholder title</h3>
              <p className='line-clamp-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                architecto? Placeholder description.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
