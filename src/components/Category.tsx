import { IArticle } from '@/app/page';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SectionHeading } from './SectionHeading';

export const Category = ({
  category,
  data
}: {
  category: string;
  data: IArticle[];
}) => {
  return (
    <section>
      <SectionHeading heading={category} />
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <Link
          href={`/${category}/${data[0].slug}`}
          className='group col-span-1'>
          <picture className='relative mb-4 block aspect-[3/2] max-h-[12rem] w-full bg-navBg'>
            <Image
              className='object-cover'
              src={data[0].imageUrl}
              alt=''
              fill
              sizes='30vw'
            />
          </picture>
          <h3
            title={data[0].title}
            className='text-card font-bold line-clamp-3 group-hover:text-primary group-focus:text-primary'>
            {data[0].title}
          </h3>
        </Link>
        <div className='col-span-1 flex flex-col gap-4'>
          {data.slice(1, 4).map((article, idx) => (
            <Link
              href={`/${category}/${article.slug}`}
              key={idx}
              className='group flex gap-4'>
              <picture className='relative block aspect-square w-full max-w-[5rem] grow bg-navBg'>
                <Image
                  src={article.imageUrl}
                  alt=''
                  fill
                  className='object-cover'
                  sizes='120px'
                />
              </picture>
              <div className='grow'>
                <h3
                  title={article.title}
                  className='mb-1.5 text-nav font-bold line-clamp-3 group-hover:text-primary group-focus:text-primary'>
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
