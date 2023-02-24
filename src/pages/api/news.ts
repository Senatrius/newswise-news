// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import articles from '../../articles.json';
import type { NextApiRequest, NextApiResponse } from 'next';

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IArticles>
) {
  const newsByCategory = articles.reduce(
    (obj: { [key: string]: any }, article: IArticle) => {
      if (!obj[article.category]) {
        obj[article.category] = [];
      }

      obj[article.category].push(article);

      return obj;
    },
    {}
  );
  res.status(200).json(newsByCategory);
}
