import Image from 'next/image';
import Link from 'next/link';
import { IArticles } from '@/pages/api/news';
import { SectionHeading } from './SectionHeading';

export const TopStories = ({ data }: { data: IArticles }) => {
  const entries = Object.entries(data);

  return (
    <section className='wrapper my-8'>
      <SectionHeading heading='Top Stories Today' />
      <div className='grid-cols-1 gap-4 [grid-template-areas:"first"_"second"_"third"_"fourth"_"fifth"] last:grid  sm:grid-cols-2 sm:[grid-template-areas:"first_first"_"second_third"_"fourth_fifth"] md:gap-6 lg:grid-cols-4 lg:[grid-template-areas:"first_first_second_third"_"first_first_fourth_fifth"]'>
        <Link
          href={`/${entries[0][0]}/${entries[0][1][0].slug}`}
          className='group relative overflow-hidden flex aspect-[3/2] max-h-[22rem] w-full bg-navBg [grid-area:first] lg:max-h-[25rem]'>
          <Image
            className='object-cover transition group-hover:scale-110'
            src={entries[0][1][0].imageUrl}
            alt=''
            sizes='800px'
            fill
          />
          <div className='z-10 w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-1 inline-block rounded-sm bg-primary py-1 px-2 text-small capitalize'>
              {entries[0][0]}
            </span>
            <h3 className='text-card font-medium leading-snug line-clamp-2'>
              {entries[0][1][0].title}
            </h3>
          </div>
        </Link>
        <Link href={`/${entries[1][0]}/${entries[1][1][0].slug}`} className='group overflow-hidden relative flex aspect-[4/2] w-full bg-navBg [grid-area:second] lg:aspect-auto'>
          <Image
            className='object-cover transition group-hover:scale-110'
            src={entries[1][1][0].imageUrl}
            alt=''
            fill
            sizes='800px'
          />
          <div className='z-10 w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-1 inline-block rounded-sm bg-primary py-1 px-2 text-small capitalize'>
              {entries[1][0]}
            </span>
            <h3 className='text-nav font-medium leading-snug line-clamp-2'>
              {entries[1][1][0].title}
            </h3>
          </div>
        </Link>
        <Link href={`/${entries[2][0]}/${entries[2][1][0].slug}`} className='group overflow-hidden relative flex aspect-[4/2] w-full bg-navBg [grid-area:third] lg:aspect-auto'>
          <Image
            className='object-cover transition group-hover:scale-110'
            src={entries[2][1][0].imageUrl}
            alt=''
            fill
            sizes='800px'
          />
          <div className='z-10 w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-1 inline-block rounded-sm bg-primary py-1 px-2 text-small capitalize'>
              {entries[2][0]}
            </span>
            <h3 className='text-nav font-medium leading-snug line-clamp-2'>
              {entries[2][1][0].title}
            </h3>
          </div>
        </Link>
        <Link href={`/${entries[3][0]}/${entries[3][1][0].slug}`} className='group overflow-hidden relative flex aspect-[4/2] w-full bg-navBg [grid-area:fourth] lg:aspect-auto'>
          <Image
            className='object-cover transition group-hover:scale-110'
            src={entries[3][1][0].imageUrl}
            alt=''
            fill
            sizes='800px'
          />
          <div className='z-10 w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-1 inline-block rounded-sm bg-primary py-1 px-2 text-small capitalize'>
              {entries[3][0]}
            </span>
            <h3 className='text-nav font-medium leading-snug line-clamp-2'>
              {entries[3][1][0].title}
            </h3>
          </div>
        </Link>
        <Link href={`/${entries[4][0]}/${entries[4][1][0].slug}`} className='group overflow-hidden relative flex aspect-[4/2] w-full bg-navBg [grid-area:fifth] lg:aspect-auto'>
          <Image
            className='object-cover transition group-hover:scale-110'
            src={entries[4][1][0].imageUrl}
            alt=''
            fill
          />
          <div className='z-10 w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-1 inline-block rounded-sm bg-primary py-1 px-2 text-small capitalize'>
              {entries[4][0]}
            </span>
            <h3 className='text-nav font-medium leading-snug line-clamp-2'>
              {entries[4][1][0].title}
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
};
