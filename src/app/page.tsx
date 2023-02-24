import { CalendarSection } from '@/components/Calendar';
import { Category } from '@/components/Category';
import { Poll } from '@/components/Poll';
import { SideAd } from '@/components/SideAd';
import { TopStories } from '@/components/TopStories';
import { IArticle } from '@/pages/api/news';

async function getData() {
  const res = await fetch('http://localhost:3000/api/news');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <TopStories data={data} />
      <div className='wrapper my-8 grid grid-cols-12'>
        <section className='col-span-12 mb-8 flex flex-col gap-8 md:col-span-8 md:mb-0 md:mr-8'>
          {Object.entries(data).map((entry, idx) => (
            <Category
              key={idx}
              category={entry[0]}
              data={entry[1] as IArticle[]}
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
