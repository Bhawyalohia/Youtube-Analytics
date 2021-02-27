import React, { useEffect, useState } from "react";
function Chart(props)
{
    const {data,height,width}=props;
    //const [pathd,setpath]=useState("");
    // useEffect(()=>
    // {
    //     if(data.length==0)
    //     return (<path></path>);
    //     var path1;
    //     path1=(data.map(getPoint));
    //     path1=path1.toString();
    //     setpath(path1);
    //     console.log(path1);   
    //     console.log(data);
    // },[]);
    function getX(index)
    {
        return ((width)*((index+1)/getMaxX()));
    }
    function getY(viewCount)
    {
        var maxy=getMaxY();
        console.log(maxy);
        return ((height)*(viewCount/getMaxY()));
    }
    function getMaxX()
    {
        return data.length;
    }
    function getMaxY()
    {
       var maxi=data.reduce((prev,item)=>
       {
          return (parseInt(item.statistics.viewCount)>prev?parseInt(item.statistics.viewCount):prev);
       },0);
       return parseInt(maxi);
    }
    function getPoint(item,index)
    {
        var x=Math.floor(getX(index));
        var y=Math.floor(getY(parseInt(item.statistics.viewCount)));
        if(index==0)
        return ("M "+x+" "+y+" ");
        else return ("L "+x+" "+y+" ");
    }
    function makePath()
    {
        if(data.length==0)
        return (<path></path>);
        var path1;
        path1=(data.map(getPoint));
        path1=path1.toString();
        console.log(path1);
        console.log(data);
        return <path d={path1} className="lineChartPath"/>
    }
   return (<div className="chartDivison">
       <svg width={width} height={height}>
        {makePath()}
       </svg>
       {/* <p>{pathd}</p> */}
   </div>);
}
export default Chart;