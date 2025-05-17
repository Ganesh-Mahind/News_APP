function News(props){
     
    return(
        <div className="news zoom">
            <div className="news-img">
                {
                    props.article.urlToImage!==null?
                    <img src={props.article.urlToImage}></img>:
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZBy8k1YnTUpnI_pYTScZBWmVlGY9xg1SdOdqQcWMo9R2YG9iIK1XBUXQV-Xb1Mb0V_k&usqp=CAU"></img>
                }
                
            </div>
            <h2>{props.article.title}</h2>
            <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target="blank">read more</a></p>
            

            <div className="source">
                <p>Author : {props.article.author}</p>
                <p>{props.article.source.name}</p>
            </div>
        </div>
    )

}
export default News;