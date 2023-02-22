import { CalendarSection } from '@/components/Calendar';
import { TopStories } from '@/components/TopStories';

export default function Home() {
  return (
    <main>
      <TopStories />
      <div className='wrapper my-8 grid grid-cols-12 gap-4 md:gap-6'>
        <section className='col-span-12 md:col-span-4 lg:col-span-3'>
          <CalendarSection />
        </section>
        <section className='col-span-7 md:col-span-8 lg:col-span-6'></section>
        <section className='hidden lg:col-span-3'></section>
      </div>
    </main>
  );
}
