import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("india");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const pageSize = 8;

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=759d0f2e077342c184f055c56f0aa43a`
    )
      .then((res) => res.json())
      .then((news) => {
        if (news.status === "ok") {
          setArticles(news.articles || []);
          setTotalResults(news.totalResults || 0);
        } else {
          setArticles([]);
        }
      })
      .catch(() => setArticles([]));
  }, [category, page]);

  return (
    <div className="App">
      <header className="header">
        <h1>📰 NewsPulse</h1>
        <input
          type="text"
          placeholder="Search world news..."
          onChange={(e) => {
            if (e.target.value !== "") {
              setCategory(e.target.value);
              setPage(1);   // IMPORTANT
            } else {
              setCategory("india");
              setPage(1);
            }
          }}
        />
      </header>

      <section className="news-articles">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <News key={index} article={article} />
          ))
        ) : (
          <h3>No news found</h3>
        )}
      </section>

      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          ⬅ Previous
        </button>

        <span>Page {page}</span>

        <button
          disabled={page * pageSize >= totalResults}
          onClick={() => setPage(page + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default App;
