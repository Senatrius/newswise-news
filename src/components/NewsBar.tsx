import React from 'react';

const date = new Date();
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getOrdinalNum = (number: number) => {
  let selector;

  if (number <= 0) {
    selector = 4;
  } else if ((number > 3 && number < 21) || number % 10 > 3) {
    selector = 0;
  } else {
    selector = number % 10;
  }

  return number + ['th', 'st', 'nd', 'rd', ''][selector];
};

export const NewsBar = () => {
  return (
    <div className='bg-navBg py-3 text-small text-white'>
      <div className='wrapper flex items-center justify-between'>
        <p>Latest news placeholder here...</p>
        <div className='flex items-center'>
          <div className='mx-4 -my-3 hidden min-h-full w-[1px] self-stretch bg-divider sm:inline-block'></div>
          <p className='hidden sm:inline-block '>{`${date.getFullYear()}, ${
            months[date.getMonth()]
          } ${getOrdinalNum(date.getDate())}`}</p>
          <div className='mx-4 -my-3 min-h-full w-[1px] self-stretch bg-divider'></div>
          <p>- XX°C</p>
        </div>
      </div>
    </div>
  );
};
