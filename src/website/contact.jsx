import React from "react";
import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <div className="web">
            <div className="main-card">
                <NavLink style={{textDecoration: "none", fontSize: "14px", color: "#d1d1d1d1    "}} to="/" className={({ isActive }) => (isActive ? "active" : "")}> &lt;- Back to Home</NavLink>
                <h1>Contact</h1>
            </div>
            <div>
            
            </div>
        </div>
    );
}

export default Contact;