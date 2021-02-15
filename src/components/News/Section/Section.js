import React,{useEffect,useState} from 'react'
import './Section.css'
import {Link} from 'react-router-dom'

const Section = () => {

    const [newsData,setNewsData] = useState([])
    const [search, setSearch] = useState('covid')
   
  const handleSearch = () =>{
    const keyword = document.getElementById('keyword').value
    
    keyword.length>0 ? setSearch(keyword) : setSearch('covid')
  }
   
    const APIKEY = '75ded27178664b8ba95b939b59c5a9a5'
    const API = `http://newsapi.org/v2/everything?qInTitle=${search}&sortBy=popularity&apiKey=${APIKEY}`
  
    useEffect(() => {
      const getNewsData = async () => {
       await fetch(API)
       .then(res => res.json())
       .then(data => {
         const newsData = data.articles.map((source) => ({
          author: source.author,
          title: source.title,
          source: source.source,
          description: source.description,
          url: source.url,
          urlToImage:source.urlToImage,
          publishedAt: source.publishedAt
         }))
         setNewsData(newsData)
       })
      }
      getNewsData()
  },[search])


    return (
        <>
        <div className="heading">
          <Link to = '/' className="highlight">{`${search} Highlight`}</Link>
          <div className="search">
            <input type="text" id='keyword'/>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
             {newsData.map((news) => {
             return (
            <div className='section'>
              <div className="image">
              <img src={news.urlToImage} alt=""/>
              <h1 className="title"><a style={{
                  color:'#fff',textDecoration:'none'
              }} href={news.url}>{news.title}</a></h1>
              <p className='description'>{news.description}</p>
              <div className="overflow"></div>
              <div className="date">{news.publishedAt}</div>
              </div>
           </div>
             )
             })}
        </>
    )
}

export default Section
