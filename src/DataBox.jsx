import React from "react";
function DataBox(props)
{
  const {svgX,svgY,data}=props;
  return (<div className="DataBox">
          <div className="card" style={{width: "18rem"}}>
      <img className="card-img-top" src={data.snippet.thumbnails.default.url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{data.snippet.title}</h5>
        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Views: {data.statistics.viewCount}</li>
        <li className="list-group-item">Likes: {data.statistics.likeCount}</li>
        <li className="list-group-item">Dislikes: {data.statistics.dislikeCount}</li>
      </ul>
          <div className="card-body">
        <a href={"https://www.youtube.com/watch?v="+data.snippet.resourceId.videoId} className="card-link">Go to Video</a>
      </div>
      </div>
  </div>);
}
export default DataBox ;