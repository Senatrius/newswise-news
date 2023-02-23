import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Poll = () => {
  return (
    <form>
      <SectionHeading heading='Poll' />
      <p className='mb-4'>
        What is your most preferred way to get latest news and events around the
        world?
      </p>
      <fieldset className='flex flex-col gap-2'>
        <div>
          <input
            type='radio'
            name='source'
            id='internet'
          />
          <label
            className='ml-2'
            htmlFor='internet'>
            Internet
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='source'
            id='tv'
          />
          <label
            className='ml-2'
            htmlFor='tv'>
            TV
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='source'
            id='radio'
          />
          <label
            className='ml-2'
            htmlFor='radio'>
            Radio
          </label>
        </div>
        <div>
          <input
            type='radio'
            name='source'
            id='newspaper'
          />
          <label
            className='ml-2'
            htmlFor='newspaper'>
            Newspaper
          </label>
        </div>
      </fieldset>
      <button
        className='mt-4 rounded-sm bg-primary py-4 px-12 text-card text-white hover:brightness-150 focus:brightness-150'
        type='button'>
        Vote
      </button>
    </form>
  );
};
