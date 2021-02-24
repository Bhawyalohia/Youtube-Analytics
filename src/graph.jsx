import React, { useEffect, useState } from 'react';
function Graph(props)
{
    const [data,setdata]=useState({});
     var videoList=[];
     var channelData;

    useEffect(()=>
    {
        fetch("https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id="+props.channelId+"&key=AIzaSyDm4VG_sYBTegAsEouGmZdKI1YHDpJaUsg")
        .then(response=>response.json())
        .then((result)=>
        {   channelData=result.items[0];
            //console.log(channelData);
            var playlistId=channelData.contentDetails.relatedPlaylists.uploads;
            fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId="+playlistId+"&key=AIzaSyDm4VG_sYBTegAsEouGmZdKI1YHDpJaUsg")
            .then(response=>response.json())
            .then((result)=>
            {
                  videoList=result.items;
                  //console.log(videoList);
                  videoList.forEach(videoItem=> {
                      var videoId=videoItem.snippet.resourceId.videoId;
                      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id="+videoId+"&key=AIzaSyDm4VG_sYBTegAsEouGmZdKI1YHDpJaUsg")
                      .then(response=>response.json())
                      .then((result)=>
                      {
                          videoItem.statistics=result.items[0].statistics;
                          console.log(videoItem);
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



    return (<div>
        </div>);
}
export default Graph;