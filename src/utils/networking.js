import utils from './utils'

const baseURL = 'https://newsapi.org/v2'
const apiKey = 'e8d28130c9414eb9ae3fa39c67553511'
const dummyImageUrl = "https://dummyimage.com/600x400/f7f7f7/000000&text=N"

export default {
  async fetchHeadlines(newsId) {
    const fetchUrl = newsId ?
      `${baseURL}/top-headlines?sources=${newsId}&apiKey=${apiKey}` :
      `${baseURL}/top-headlines?country=us&apiKey=${apiKey}`;

    try {
      const response = await fetch(fetchUrl);
      const responseJson = await response.json();

      const articlesArray = responseJson.articles && responseJson.articles.length > 0 ?
      responseJson.articles.map(article => ({
        source: String(article.source.name),
        title: String(article.title),
        url: String(article.url),
        urlToImage: String(article.urlToImage || dummyImageUrl),
        publishedAt: String(utils.formatDate(article.publishedAt))
      })) :
      [];

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
    
      const fetchUrl = `${baseURL}/sources?${queryParams.toString()}`;
    
      try {
        const response = await fetch(fetchUrl);
        const responseJson = await response.json();

        const sourcesArray = responseJson.sources && responseJson.sources.length > 0 ? responseJson.sources.map((source) => ({
          id: String(source.id),
          name: String(source.name),
          description: String(source.description),
          url: String(source.url),
          category: String(source.category),
          language: String(source.language),
        })) : 
        [];

        console.log(sourcesArray);
        return sourcesArray;
      } catch (error) {
        console.error(error);
      }
    }
}
