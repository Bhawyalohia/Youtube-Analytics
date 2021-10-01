import React from "react";
function DataBox(props)
{
  const {x,y,data}=props;
  function getDate()
  {
    return data.snippet.publishedAt.substr(0,10);
  }
  return (<div className="DataBox" style={{left:x+"px",top:y-250+"px",position:"absolute"}}>
          <div className="card" style={{width: "20rem"}} >
        <img className="card-img-top" src={data.snippet.thumbnails.default.url} alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">{data.snippet.title}</h5>
        </div>
        <h6>Views: {data.statistics.viewCount}</h6>
        <h6>Likes: {data.statistics.likeCount}</h6>
        <h6>Dislikes: {data.statistics.dislikeCount}</h6>
         <h6>Date: {getDate()}</h6>
      </div>
  </div>);
}
export default DataBox ;