import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';




const News =(props)=> {
  
 const [articles,setArticles]=useState([])
 const [loading,setLoading]=useState(true)
 const [page,setPage]=useState(1)
 const [totalResults,setTotalResults]=useState(0)

 
   const capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }



const updateNews=async()=>{
  props.setProgress(10)
  // const url=`https://newsapi.org/v2/top-headlines?/country=in&category=${props.category}&apiKey=52afe67161494dbb997e1d71470ee233&page${page}&pageSize=${props.pageSize}`

  //  const url=`https://newsapi.org/v2/top-headlines?/world&q=${props.category}&apiKey=dcbbb9a5b3b845e588b1d07a9daef497&page=${page}&pageSize=${props.pageSize}`

  //  const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`

  const url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}&page=${page}`


   
    setLoading(true)
    let data=await fetch(url);
    props.setProgress(30)
    let parsedData=await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false)
    props.setProgress(100)
}

    useEffect(()=>{
    document.title= props.category==='general'?document.title:`${capitalize(props.category)}-Breaking Bulletin`;
    updateNews();
    // eslint-disable-next-line
    },[])

  //  const fetchMoreData=async()=>{
    
    //  const url=`https://newsapi.org/v2/top-headlines?/country=in&category=${props.category}&apiKey=52afe67161494dbb997e1d71470ee233&page=${page}&pageSize=${props.pageSize}`
    
    // const url=`https://newsapi.org/v2/top-headlines?/world&q=${props.category}&apiKey=dcbbb9a5b3b845e588b1d07a9daef497&page=${page}&pageSize=${props.pageSize}`

    // const url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
  //   const url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=${props.pageSize}&apikey=${props.apiKey}&page=${page+1}`
  //   setPage(page+1)
  //   let data=await fetch(url);
  //   let parsedData=await data.json();
  //   setArticles(articles.concat(parsedData.articles))
  //   setTotalResults(parsedData.totalResults)
 
  // };

  
  
    return (
      <>
        <h1 className="text-center " style={{margin:"35px 0px", marginTop:"90px"}}>Breaking Bulletin - Top {capitalize(props.category)} Headlines</h1>
        <div className="text-center">{loading && <Spinner/>}</div>
        {/* <InfiniteScroll
          dataLength={articles.length}   
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={ < Spinner/>} > */}

<div className="container">
        <div className="row" >
        { articles.map((element)=>{
          return <div className="col-md-4"  key={element.url}><NewsItem title={element.title} description={element.description !== null? element.description.slice(0,88):element.description} imgUrl={element.image} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/></div>
          
        })}
      </div>
      </div>
      {/* </InfiniteScroll> */}

    
      </>
    )

}

News.defaultProps ={
  country:"pk",
  pageSize:6,
  category: 'general'
}
News.propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}


export default News
