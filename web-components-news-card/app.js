import NewsCard from './news-card.js';

async function fetchNews() {
  const response = await fetch('https://www.reddit.com/r/upliftingnews/.json');
  return response.json();
}

document.addEventListener('DOMContentLoaded', async () => {
  const headlines = await fetchNews();
  const newsContainer = document.querySelector('#news');

  headlines.data.children.forEach((headline) => {
    // Create a new element instance
    const newsCard = new NewsCard();

    // Set attributes
    newsCard.setAttribute('title', headline.data.title);
    newsCard.setAttribute('href', headline.data.url);
    newsCard.setAttribute('imageSrc', headline.data.thumbnail);
    newsCard.innerText = headline.data.title;

    // Append to DOM
    newsContainer.appendChild(newsCard);
  });
});
