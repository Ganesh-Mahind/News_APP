function News({ article }) {
  return (
    <div className="news">
      <div className="news-img">
        <img
          src={
            article.urlToImage
              ? article.urlToImage
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZBy8k1YnTUpnI_pYTScZBWmVlGY9xg1SdOdqQcWMo9R2YG9iIK1XBUXQV-Xb1Mb0V_k&usqp=CAU"
          }
          alt="news"
        />
      </div>

      <h2>{article.title}</h2>

      <p>
        {article.description?.substring(0, 100)}...
        <a href={article.url} target="_blank" rel="noreferrer">
          {" "}Read more →
        </a>
      </p>

      <div className="source">
        <p>✍ {article.author || "Unknown"}</p>
        <p>📰 {article.source?.name}</p>
      </div>
    </div>
  );
}

export default News;
