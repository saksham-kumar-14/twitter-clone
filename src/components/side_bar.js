import React from "react";
import twitter_logo from "../assets/nav-bar-icons/twitter.png"
import side_bar_icons from "../api/sidebar_icons_api"; 
import user_details from "../api/user_details";  
import style from "../styles/sidebar_styles/sidebar_style.css"; 

const Sidebar=()=>{

    return(
        <div className="sidebar-section">
            <img id="main-twitter-logo" src={twitter_logo}></img>
            {side_bar_icons.map((e)=>{
                return(
                    <div className="sidebar-option"> 
                        <img className="sidebar-option-image" src={e.image}></img> 
                        <span className="sidebar-option-name">{e.name}</span> 
                    </div>
                )
            })}

            <button id="sidebar-tweet-btn">Tweet</button> 

            <div id="user-profile">
                <img id="sidebar-user-profile-image" src={user_details.image}></img>
                <div id="user-profile-details">
                    <span id="user-sidebar-name">{user_details.name}</span>
                    <span id="user-sidebar-username">{user_details.username}</span>
                </div>
            </div>

        </div>
    )
}


export default Sidebar
