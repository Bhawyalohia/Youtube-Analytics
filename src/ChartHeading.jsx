import React from "react";
function ChartHeading(props)
{
    const {data}=props;
    if(Object.keys(data).length===0)
    return <div></div>;
    return (<div className="ChartHeading">
      <div className="row">
      <div className="col-sm-4">
        
       </div>
       <div className="col-sm-4">
       hello
      </div>
       <div className="col-sm-4">
       hello
    </div>
      </div>
    </div>);
}
export default ChartHeading;