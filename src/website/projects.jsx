import React from "react";
import Card from "./card.jsx"; 
import { NavLink } from "react-router-dom";

import ProjectCards from "./projectCards.jsx";
function Projects() {
    return (
        <div className="web">
            <div  className="main-card">
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/" className={({ isActive }) => (isActive ? "active" : "")}> &lt;- Back to Home</NavLink>
                
                <h1>Projects</h1>
                <div>
                    <ProjectCards title="Design & Dev Co." description="Responsive and Static Business Website"
                              image={"mywebsite.png"}/>
                </div>
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/crud" className={({ isActive }) => (isActive ? "active" : "")}>crud</NavLink>
                <br />
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/api" className={({ isActive }) => (isActive ? "active" : "")}>api</NavLink>
                <br />
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/order" className={({ isActive }) => (isActive ? "active" : "")}>order</NavLink>
                <br />
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/random" className={({ isActive }) => (isActive ? "active" : "")}>random</NavLink>
                <br />
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/numberguess" className={({ isActive }) => (isActive ? "active" : "")}>numberguess</NavLink>
            </div>
            
        </div>
    );
}

export default Projects;