import {useEffect, useState} from 'react';
import './App.css';
import News from './News';
function App() {
  
  
   let [articles,setArticles] = useState([]);
   let [category,setCategory] = useState("india");

  useEffect(()=>{

    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=bc1358c44b1e4506814bbce989694fc4`)
    // fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-05-09&apiKey=bc1358c44b1e4506814bbce989694fc4`)
    .then((response)=>response.json())//u get initial response which return response.json which extract data
    .then((news)=>{//here data should be available
      setArticles(news.articles);
      console.log(news.articles);
    })

    .catch((err)=>{
      console.log(err)
    })
  },[category])
 

  return (
    <div className="App">
      <header className='header'>
        <h1>Latest News</h1>
        <input type='text'onChange={(event)=>{
          if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else
          {
            setCategory("india");
          }
          
        }}  placeholder='Search Latest news'></input>


      </header>

      <section className='news-articles'>
        {
          articles && articles.length!==0?

          articles.map((article)=>{
            return(
              <News article={article} ></News>
            )
          })
          :
          <h3>No news found for your search text</h3>
        }
        
     
      </section>
    </div>
  );
}

export default App;
