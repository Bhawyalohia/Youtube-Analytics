import React, { useEffect, useState } from "react";
import DataBox from "./DataBox";
function Chart(props)
{
    const paddingTop=100;
    const paddingLeft=350;
    const {data,height,width}=props;
    const [hoverEffects,setHoverEffects]=useState({x:0,y:0,enable:false});
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
    function getNearestElementPos(presX)
    {
        var minDis= Math.abs(getX(0)-presX);
        var nearestIndex=0;
        for(var i=0;i<data.length;i++)
        {
            if(Math.abs(getX(i)-presX)<minDis)
            {
                minDis=Math.abs(getX(i)-presX);
                nearestIndex=i;
            }
        }
        return nearestIndex;
    }
    function handleMouseMove(event)
    {
        var {offsetX,offsetY}=event.nativeEvent;
        setHoverEffects({x:offsetX-paddingLeft,y:offsetY-paddingTop,enable:true});
    }
    function handleMouseLeave()
    {
        setHoverEffects({x:0,y:0,enable:false});
    }
    function createCircle(x,y)
    {
        var pos=getNearestElementPos(x);
        var svgX=Math.floor(getX(pos));
        var svgY=Math.floor(getY(parseInt(data[pos].statistics.viewCount)));
        return (<g>
             <circle cx={svgX} cy={svgY} r="5" stroke="black" stroke-width="3" fill="red" id="indicationCircle"/>
        </g>);
    }
    function createDataBox(x,y)
    {
        var pos=getNearestElementPos(x);
        var coordinateInfo=document.querySelector("#innerSVG").getBoundingClientRect();
        var svgX=Math.floor(getX(pos));
        var svgY=Math.floor(getY(parseInt(data[pos].statistics.viewCount)));
        var x=coordinateInfo.left+window.scrollX+svgX;
        var y=coordinateInfo.top+window.scrollY+svgY;
        return (<DataBox x={x} y={y} data={data[pos]}></DataBox>);
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
        return <path d={path1} className="lineChartPath" />
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
        return <path d={path1} className="lineChartArea" />
    }
   return (<div className="chartDivision">
       <svg width="1000" height="700" >
       <svg x={paddingLeft} y={paddingTop} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} id="innerSVG">
        {makePath()}
        {makeAxis()}
        {makeAreaFilled()}
        {hoverEffects.enable&&(createCircle(hoverEffects.x,hoverEffects.y))}
       </svg>
       </svg>
       {hoverEffects.enable&&(createDataBox(hoverEffects.x,hoverEffects.y))}
   </div>);
}
export default Chart;