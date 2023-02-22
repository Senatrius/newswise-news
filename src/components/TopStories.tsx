import { SectionHeading } from './SectionHeading';

export const TopStories = () => {
  return (
    <section className='wrapper my-8'>
      <SectionHeading heading='Top Stories Today' />
      <div className='grid grid-cols-1 gap-4 [grid-template-areas:"first"_"second"_"third"_"fourth"_"fifth"]  sm:grid-cols-2 sm:[grid-template-areas:"first_first"_"second_third"_"fourth_fifth"] md:gap-6 lg:grid-cols-4 lg:[grid-template-areas:"first_first_second_third"_"first_first_fourth_fifth"]'>
        <div className='flex aspect-[3/2] max-h-[22rem] w-full bg-navBg [grid-area:first] lg:max-h-[25rem]'>
          <div className='w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-0.5 inline-block rounded-sm bg-primary py-1 px-2 text-small'>
              Category
            </span>
            <h3 className='text-card font-medium line-clamp-2'>
              Placeholder Title
            </h3>
          </div>
        </div>
        <div className='flex aspect-[4/2] w-full bg-navBg [grid-area:second] lg:aspect-auto'>
          <div className='w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-0.5 inline-block rounded-sm bg-primary py-1 px-2 text-small'>
              Category
            </span>
            <h3 className='text-card font-medium line-clamp-2'>
              Placeholder Title
            </h3>
          </div>
        </div>
        <div className='flex aspect-[4/2] w-full bg-navBg [grid-area:third] lg:aspect-auto'>
          <div className='w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-0.5 inline-block rounded-sm bg-primary py-1 px-2 text-small'>
              Category
            </span>
            <h3 className='text-card font-medium line-clamp-2'>
              Placeholder Title
            </h3>
          </div>
        </div>
        <div className='flex aspect-[4/2] w-full bg-navBg [grid-area:fourth] lg:aspect-auto'>
          <div className='w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-0.5 inline-block rounded-sm bg-primary py-1 px-2 text-small'>
              Category
            </span>
            <h3 className='text-card font-medium line-clamp-2'>
              Placeholder Title
            </h3>
          </div>
        </div>
        <div className='flex aspect-[4/2] w-full bg-navBg [grid-area:fifth] lg:aspect-auto'>
          <div className='w-full self-end bg-overlay p-4 text-white'>
            <span className='mb-0.5 inline-block rounded-sm bg-primary py-1 px-2 text-small'>
              Category
            </span>
            <h3 className='text-card font-medium line-clamp-2'>
              Placeholder Title
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
