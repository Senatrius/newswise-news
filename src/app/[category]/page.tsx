import { ArticleCard } from '@/components/ArticleCard';
import { IArticle } from '@/app/page';
import data from '@/articles.json';

export default async function Category({
  params
}: {
  params: { [key: string]: string };
}) {
  const categoryData = data[params.category];

  return (
    <main className='wrapper grid-rows-auto my-8 grid grid-cols-1 gap-8 lg:grid-cols-2'>
      <h1 className='col-span-full text-article font-bold capitalize'>
        {params.category}
      </h1>
      {categoryData?.map((card: IArticle, idx: number) => (
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
