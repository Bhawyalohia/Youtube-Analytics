import React from 'react';
function ChannelInput()
{
 return (<div className="channelinput"> 
        <div>
         <h3>Enter the youtube channel id <br/>(you can find it at the end of the url of the channel page).</h3>
         <input type="text" className="form-control"></input>
         <br/>
         <button className="btn btn-primary btn-block">Get Stats</button>
        </div>
 </div>);
}
export default ChannelInput;