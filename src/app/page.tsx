import { CalendarSection } from '@/components/Calendar';
import { Category } from '@/components/Category';
import { TopStories } from '@/components/TopStories';

export default function Home() {
  return (
    <main>
      <TopStories />
      <div className='wrapper my-8 grid grid-cols-12'>
        <section className='col-span-12 mb-8 flex flex-col gap-8 md:col-span-8 md:mb-0 md:mr-8'>
          <Category category='Business' />
          <Category category='Entertainment' />
          <Category category='Sport' />
          <Category category='Politics' />
          <Category category='Technology' />
          <Category category='Science' />
          <Category category='Health' />
        </section>
        <section className='col-span-12 md:col-span-4'>
          <CalendarSection />
        </section>
      </div>
    </main>
  );
}
