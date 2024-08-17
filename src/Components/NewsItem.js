import React from 'react'
const NewsItem =(props)=> {
  
    // let {title,description,imgUrl,newsUrl,author,date,source}=props
    let {title,description,imgUrl,newsUrl,date,source}=props
    return (
      <div className='my-3' >
        <div className="card">
          <div style={{display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
        <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
  <img src={!imgUrl?"https://w0.peakpx.com/wallpaper/882/271/HD-wallpaper-good-morning-newspaper-glasses-beautiful-fluid-abstract-coffe-coffee-cup-white-other-blue.jpg":imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} </h5>
    <p className="card-text">{description}...</p>
    {/* <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p> */}
    <p className="card-text"><small className="text-muted">Published on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>

      </div>
    )
 
}

export default NewsItem
