import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import './Explorer.css';

interface Article {
  id: number;
  title: string;
  summary: string;
  link: string;
}

const fetchArticles = async (): Promise<Article[]> => {
  try {
    const response = await fetch('https://newsapi.org/v2/everything?q=Apple&from=2024-08-25&sortBy=popularity&apiKey=API_KEY'); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch articles:', error);
    return [];
  }
};

const Explorer: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles()
      .then(data => setArticles(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="explorer">
      <Header />
      <section className="explorer-content">
        <h2>Stablecoin Explorer</h2>
        <p>Analyze and compare various stablecoins.</p>

        {loading && <p>Loading articles...</p>}
        {error && <p>Error loading articles: {error}</p>}

        <div className="articles-section">
          <h3>Market Insights & Articles</h3>
          <ul className="articles-list">
            {articles.map(article => (
              <li key={article.id} className="article-item">
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <h4>{article.title}</h4>
                </a>
                <p>{article.summary}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Explorer;
