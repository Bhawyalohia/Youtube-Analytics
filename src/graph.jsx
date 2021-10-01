import React, { useEffect, useState } from 'react';
import Chart from "./chart.jsx";
import ChartHeading from "./ChartHeading";
function Graph(props)
{
    const [data,setdata]=useState([]);
    const [channelData,setChannelData]=useState({});
     var videoList=[];
    useEffect(()=>
    {
        fetch("https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id="+props.channelId+`&key=${process.env.REACT_APP_API_KEY}`)
        .then(response=>response.json())
        .then((result)=>
        {     setChannelData(result.items[0]);
            //channelData=result.items[0];
             //console.log("gmgmgmgmgmgmgmgmggmmgmgm");
            var playlistId=result.items[0].contentDetails.relatedPlaylists.uploads;
            fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+playlistId+`&key=${process.env.REACT_APP_API_KEY}`)
            .then(response=>response.json())
            .then((result)=>
            {
                  videoList=result.items;
                  //console.log(videoList);
                  videoList.forEach(videoItem=> {
                      var videoId=videoItem.snippet.resourceId.videoId;
                      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id="+videoId+`&key=${process.env.REACT_APP_API_KEY}`)
                      .then(response=>response.json())
                      .then((result)=>
                      {
                          videoItem.statistics=result.items[0].statistics;
                          console.log(videoItem.statistics);
                          setdata((prev)=>
                          {
                             return [...prev,videoItem];
                          });
                      })
                      .catch()
                      {}
                  });
            })
            .catch()
            {}
        })
        .catch()
        {}
    },[]);
    
    
    
    return (<div className="graphDivison">
              <ChartHeading data={channelData}></ChartHeading>
              <Chart data={data} height="500" width="700"></Chart> 
        </div>);
}
export default Graph;