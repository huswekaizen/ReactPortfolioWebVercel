import React from "react";
import Card from "./card.jsx"; 
import Button from "./button.jsx";
import Nav from "./nav.jsx";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";

function Home() {
    return (
        <div className="web">
            <div className="main">
                <div className="profile">
                    <div className="profile-picture">
                        <img src="gun.jpg" alt="" />
                    </div>
                    <div className="profile-details">                   
                        <h1>Joshua Calma</h1>
                        <h4><CiLocationOn />Manila, Philippines</h4>
                        <div>
                            <Button icon={<FaRegMessage />} text={"Send Message"}/>                   
                        </div>
                        <Nav/>
                    </div>                 
                </div>
                              
            </div>
            
        </div>
    );
}

export default Home;