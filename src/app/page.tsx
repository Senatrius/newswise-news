import { CalendarSection } from '@/components/Calendar';
import { Social } from '@/components/Social';
import { TopStories } from '@/components/TopStories';

export default function Home() {
  return (
    <main>
      <TopStories />
      <div className='wrapper my-8 grid grid-cols-12 gap-4 md:gap-6'>
        <section className='col-span-12 flex flex-col gap-4 md:col-span-4 md:gap-6'>
          <CalendarSection />
          <Social />
        </section>
        <section className='col-span-7 md:col-span-8'></section>
      </div>
    </main>
  );
}
