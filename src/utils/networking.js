import {formatDate} from './utils'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL
const apiKey = process.env.NEXT_PUBLIC_API_KEY
const dummyImageUrl = process.env.NEXT_PUBLIC_DUMMY_URL

export default {
  async fetchHeadlines(newsId) {
    const fetchUrl = newsId ?
      `${baseURL}/top-headlines?sources=${newsId}&apiKey=${apiKey}` :
      `${baseURL}/top-headlines?&lang=en&country=us&max=10&apikey=${apiKey}`;

    try {
      const response = await fetch(fetchUrl);
      const responseJson = await response.json();

      const articlesArray = responseJson.articles && responseJson.articles.length > 0 ?
      responseJson.articles.map(article => ({
        source: String(article.source.name),
        title: String(article.title),
        url: String(article.url),
        urlToImage: String(article.image || dummyImageUrl),
        publishedAt: String(formatDate(article.publishedAt))
      })) : [];

      return articlesArray;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
    // All named sources with English news
    async fetchSources(category) {
      const queryParams = new URLSearchParams({
        language: 'en',
        apiKey,
      });
    
      if (category) {
        queryParams.set('category', category);
      }
    
      const fetchUrl = `${baseURL}/top-headlines?&lang=en&category=${category}&apikey=${apiKey}`;
    
      try {
        const response = await fetch(fetchUrl);
        const responseJson = await response.json();
        console.log(responseJson)
        return responseJson.articles;
      } catch (error) {
        console.error(error);
      }
    }
}
