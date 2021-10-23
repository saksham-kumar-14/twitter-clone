import React from "react";
import rightmost_bar_news from "../api/other_news";
import other_people from "../api/more_people"; 
import search_icon from "../assets/nav-bar-icons/search.png"; 
import styles from "../styles/rightmost-page-styles/rightmost_styles.css"
import ronaldo_pic from "../assets/rightmost-page-icons/uefa_news.png"

const Rightmostbar=()=>{

    return(
        <div id="rightmost-bar-section"> 
            <div id="rightmost-bar-search">
                <div id="rightmost-bar-search-icon-div">
                    <img id="rightmost-bar-search-icon" src={search_icon}></img>
                </div>
                <input id="rightmost-bar-input" placeholder="Search Twitter"></input>
            </div>
            
            
            <div id="rightmost-bar-news-div">
            <h2 className="whats-happening">What's happening</h2>
                {rightmost_bar_news.map((e)=>{ 
                    return(
                        <div className="rightmost-news">
                            <div className="rightmost-news-1">
                                <span className="rightmost-small-heading">{e.small_heading}</span>
                                <div className="rightmost-news-1a">
                                    <span className="rightmost-heading">{e.heading}</span>
                                    <img className="rightmost-image" src={e.image}></img>
                                </div>
                            </div>

                            <div className="rightmost-news-2">
                                <span className="rightmost-brief-description">{e.brief_description}</span>
                            </div>
                        </div> 
                    )
                })}
            </div>

	    <div id="other-people-profiles">
        <h2 className="who-to-follow">Who to follow</h2>
		{other_people.map((e)=>{
			return(
				<div className="other-people-profile">
                    <div className="other-people-profile-1">
                        <img className="other-people-profile-image" src={e.image}></img>
                    </div>
                    <div className="other-people-profile-2">
                        <span className="other-people-profile-name">{e.name}</span>
					    <span className="other-people-profile-username">{e.username}</span> 
                    </div>
                    <div className="other-people-profile-3">
                        <button className="other-people-follow-btn">Follow</button>
                    </div>
				</div>
			)
		})}
	    </div>
        </div>
    )
}


export default Rightmostbar



