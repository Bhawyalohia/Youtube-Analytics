import logo from './logo.svg';
import './App.css';
import Heading from"./heading.jsx"
import ChannelInput from "./channelinput.jsx"
import Footer from "./footer.jsx"
import Graph from "./graph.jsx";
import { useState } from 'react';
function App() {
  const [showgraph,setshowgraph]=useState(false);
  const [channelId,setId]=useState("");
  function storeChannelId(id)
  {
      setId(id);
      setshowgraph(true);
      console.log(id);
  }
  return (
     <div>
     <Heading></Heading>
     <ChannelInput storeChannelId={storeChannelId} ></ChannelInput>
     {showgraph?(<Graph channelId={channelId}></Graph>):2}
     <Footer></Footer>
     </div>
  );
}

export default App;
