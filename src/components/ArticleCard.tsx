import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const ArticleCard = ({
  title,
  image,
  desc,
  link
}: {
  title: string;
  image: string;
  desc: string;
  link: string;
}) => {
  return (
    <Link
      className='flex flex-col items-start gap-4 hover:text-primary focus:text-primary sm:flex-row sm:items-center'
      href={link}>
      <picture className='relative block aspect-[7/5] h-full w-full bg-navBg sm:max-w-[10rem]'>
        <Image
          src={image}
          alt=''
          fill
          sizes='600px'
        />
      </picture>
      <div className='py-1.5'>
        <h2 className='mb-1.5 text-card font-bold line-clamp-2'>{title}</h2>
        <p className='leading-snug line-clamp-3'>{desc}</p>
      </div>
    </Link>
  );
};
