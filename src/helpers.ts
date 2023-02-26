import { IArticle, IArticles } from './app/page';

export const sortArticlesByCategory = (data: IArticle[]) => {
  return data.reduce(function (obj: IArticles, article: IArticle) {
    if (!obj[article.category]) {
      obj[article.category] = [];
    }
    obj[article.category].push(article);
    return obj;
  }, {});
};
