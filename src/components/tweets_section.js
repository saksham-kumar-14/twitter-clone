import React, { useState } from "react";
import saksham_pic from "../assets/home-page-icons/saksham.png"
import Tweets from "../api/tweets";
import user_details from "../api/user_details" 
import style from "../styles/tweets-page-styles/tweets_page_styles.css"
import retweet from "../assets/home-page-icons/retweet.png";
import replies from "../assets/home-page-icons/replies.png"; 
import liked from "../assets/home-page-icons/liked.png"; 
import shared from "../assets/home-page-icons/shared.png"; 

function add_tweet(tweet,all_tweets,set_all_tweets,user_details){
    if(tweet != ""){
        let arr = []
        const new_tweet = {
            "name" : user_details.name, 
            "username" : user_details.username, 
            "profile_pic" : user_details.image,  
            "time" : "1s", 
            "tweet" : tweet 
        }; 
        arr.push(new_tweet); 

        all_tweets.map((e)=>{
            arr.push(e);
        });

        set_all_tweets(arr); 
    }
    
}

const TweetsSection=()=>{
    const [all_tweets,set_all_tweets] = useState(Tweets); 
    const [user_tweet,set_user_tweet] = useState(""); 

    return(
        <>
            <h2 className="heading-home">Home</h2>

            <div id="user-tweet-section"> 
                <div id="user-tweet-section-1">
                    <div id="user-tweet-section-image-div">
                        <img id="user-tweet-section-image" src={saksham_pic}></img> 
                    </div>
                    <div id="user-tweet-section-input-div">
                        <input id="user-tweet-input" placeholder="What's happening?" onChange={(e)=>{
                            set_user_tweet(e.target.value); 
                        }} type="text"></input>
                    </div>
                </div>
                <div id="user-tweet-section-2">
                    <button onClick={()=>{
                        add_tweet(user_tweet,all_tweets,set_all_tweets,user_details); 
                        set_user_tweet(""); 
                    }} id="user-home-tweet-btn">Tweet</button>
                </div>
            </div>


            {all_tweets.map((e)=>{
                return(
                    <div className="home-tweet">
                        <div className="home-tweet-1">
                            <img className="home-tweet-image" src={e.profile_pic}></img>
                        </div>

                        <div className="home-tweet-2">
                            <div className="home-tweet-2a">
                                <span className="home-tweet-name">{e.name}</span>
                                <span className="home-tweet-username">{e.username}</span>
                                <span className="home-tweet-time">· {e.time}</span>
                            </div>
                            <div className="home-tweet-2b">
                                <span className="home-tweet-tweet">{e.tweet}</span>
                                <div className="home-tweet-2bi">
                                    <img src={replies}></img>
                                    <img src={retweet}></img>
                                    <img src={liked}></img>
                                    <img src={shared}></img>
                                </div>
                            </div>  
                        </div>
                    </div>
                )
            })}
        
        </>
    )
}

export default TweetsSection

