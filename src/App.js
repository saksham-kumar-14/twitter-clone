import React from "react"; 
import TweetsSection from './components/tweets_section'; 
import Sidebar from "./components/side_bar";
import Rightmostbar from "./components/rightmost_bar"; 
import style from "./styles/global-styles/global_styles.css" 

const App=()=>{

  return( 
    <div id="home-page">
      <div id="sidebar">
        <Sidebar/>
      </div>
      <div id="tweets-section">
        <TweetsSection/>
      </div>
      <div id="rightmost-bar">
        <Rightmostbar/>
      </div> 
    </div> 
  )
}

export default App 

