import Image from 'next/image';
import { IArticle } from '@/app/page';
import data from '@/articles.json';

export default async function Category({
  params
}: {
  params: { [key: string]: string };
}) {
  const articleData = data[params.category].filter(
    (article: IArticle) => article.slug === params.article
  );

  return (
    <main className='wrapper my-8 !max-w-[100ch]'>
      <picture className='relative mb-8 block aspect-[12/6] h-auto w-full bg-navBg'>
        <Image
          className='object-cover'
          src={articleData[0].imageUrl}
          alt=''
          fill
          sizes='1280px'
        />
      </picture>
      <article>
        <h1 className='mb-8 text-article font-bold'>{articleData[0].title}</h1>
        <p className='whitespace-pre-wrap leading-snug'>
          {articleData[0].body}
        </p>
      </article>
    </main>
  );
}
