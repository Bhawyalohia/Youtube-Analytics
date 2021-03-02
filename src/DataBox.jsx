import React from "react";
function DataBox(props)
{
  const {x,y,data}=props;
  return (<div className="DataBox" style={{left:x+"px",top:y-250+"px",position:"absolute"}}>
          <div className="card" style={{width: "20rem"}} >
        <img className="card-img-top" src={data.snippet.thumbnails.default.url} alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">{data.snippet.title}</h5>
        </div>
        <p>Views: {data.statistics.viewCount}</p>
        <p>Likes: {data.statistics.likeCount}</p>
        <p>Dislikes: {data.statistics.dislikeCount}</p>
        <div className="card-body">
        <a href={"https://www.youtube.com/watch?v="+data.snippet.resourceId.videoId} className="card-link">Go to Video</a>
      </div>
      </div>
  </div>);
}
export default DataBox ;