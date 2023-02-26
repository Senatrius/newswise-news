import { CalendarSection } from '@/components/Calendar';
import { Category } from '@/components/Category';
import { Poll } from '@/components/Poll';
import { SideAd } from '@/components/SideAd';
import { TopStories } from '@/components/TopStories';
import data from '@/articles.json';
import { sortArticlesByCategory } from '@/helpers';

export interface IArticle {
  title: string;
  slug: string;
  body: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
}

export interface IArticles {
  [key: string]: IArticle[];
}

export default function Home() {
  const sortedData = sortArticlesByCategory(data);

  return (
    <main>
      <h1 className='sr-only'>News Section</h1>
      <TopStories data={sortedData} />
      <div className='wrapper my-8 grid grid-cols-12'>
        <section className='col-span-12 mb-8 flex flex-col gap-8 md:col-span-8 md:mb-0 md:mr-8'>
          {Object.entries(sortedData).map((entry, idx) => (
            <Category
              key={idx}
              category={entry[0]}
              data={entry[1]}
            />
          ))}
        </section>
        <section className='col-span-12 flex flex-col gap-8 md:col-span-4'>
          <CalendarSection />
          <Poll />
          <SideAd />
        </section>
      </div>
    </main>
  );
}
