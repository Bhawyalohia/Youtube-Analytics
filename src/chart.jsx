import React, { useEffect, useState } from "react";
function Chart(props)
{
    const {data,height,width}=props;
    function getX(index)
    {
        return ((width)*((index+1)/getMaxX()));
    }
    function getY(viewCount)
    {
        var maxy=getMaxY();
        console.log(maxy);
        return height-((height)*(viewCount/getMaxY()));
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
    function makeAxis()
    {
        var xAxis={xLeft:getX(0),yLeft:getY(0),xRight:(getX(getMaxX())),yRight:getY(0)};
        var yAxis={xTop:getX(0),yTop:getY(getMaxY()),xBottom:getX(0),yBottom:getY(0)};
        var dx="M "+xAxis.xLeft+" "+xAxis.yLeft+" L "+xAxis.xRight+" "+xAxis.yRight;
        var dy="M "+yAxis.xTop+" "+yAxis.yTop+" L "+yAxis.xBottom+" "+yAxis.yBottom;
        return (<g>
               <path d={dx} className="lineChartAxis" ></path>
               <path d={dy} className="lineChartAxis" ></path>
        </g>);
    }
    function makeAreaFilled()
    {
        if(data.length==0)
        return (<path></path>);
        var xAxis={xLeft:getX(0),yLeft:getY(0),xRight:(getX(getMaxX())),yRight:getY(0)};
        var yAxis={xTop:getX(0),yTop:getY(getMaxY()),xBottom:getX(0),yBottom:getY(0)};
        var path1;
        path1=(data.map(getPoint));
        path1=path1.toString();
        path1+=("L "+xAxis.xRight+" "+xAxis.yRight+" L "+xAxis.xLeft+" "+xAxis.yLeft+" ");
        return <path d={path1} className="lineChartArea"/>
    }
   return (<div className="chartDivision">
       <svg width="1000" height="700">
       <svg x="350" y="100">
        {makePath()}
        {makeAxis()}
        {/* {makeAreaFilled()} */}
       </svg>
       </svg>
   </div>);
}
export default Chart;