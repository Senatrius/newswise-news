import { ArticleCard } from '@/components/ArticleCard';
import { IArticle } from '@/pages/api/news';

async function getData() {
  const res = await fetch('http://localhost:3000/api/news');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Category({
  params
}: {
  params: { [key: string]: string };
}) {
  const data = await getData();
  const categoryData = data[params.category];

  return (
    <main className='wrapper grid-rows-auto my-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
      {categoryData.map((card: IArticle, idx: any) => (
        <ArticleCard
          key={idx}
          title={card.title}
          image={card.imageUrl}
          desc={card.body.slice(0, 300)}
          link={`\\${params.category}\\${card.slug}`}
        />
      ))}
    </main>
  );
}
