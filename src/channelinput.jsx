import React, { useState } from 'react';
function ChannelInput(props)
{
 const [id,setId]=useState("");
 function handleClick()
 {
   props.storeChannelId(id);
 }
 function handleChange(event)
 {
   setId(event.target.value);
 }
 return (<div className="channelinput"> 
        <div>
         <h3>Enter the youtube channel id <br/>(you can find it at the end of the url of the channel page).</h3>
         <input type="text" className="form-control" value={id} onChange={handleChange}></input>
         <br/>
         <button className="btn btn-primary btn-block" onClick={handleClick}>Get Stats</button>
        </div>
 </div>);
}
export default ChannelInput;