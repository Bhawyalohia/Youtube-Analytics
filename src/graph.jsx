import React, { useEffect, useState } from 'react';
function Graph(props)
{
    const [data,setdata]=useState({});
    useEffect(()=>
    {
    fetch("https://youtube.googleapis.com/youtube/v3/channels?part=statistics&id="+props.channelId+"&key=AIzaSyDm4VG_sYBTegAsEouGmZdKI1YHDpJaUsg")
    .then(res=>res.json())
        .then((res)=>
        {
            console.log(res.items[0].statistics);
        })
    },[]);
    return (<div>
        </div>);
}
export default Graph;