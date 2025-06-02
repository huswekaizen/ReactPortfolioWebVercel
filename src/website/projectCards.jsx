import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function projectCards({image, title, description}) {

    const style = {
        
        
        width: "80%",
        borderRadius: "10px"
    }

    const details = {
        display: "flext",
        flexDirection: "column",
        border: "1px solid rgb(82, 82, 82)",
        borderRadius: "10px",
        display: "inline-block",
        padding: "10px"
    }
    


    return (
        <div style={style}>
            <div style={details}>
                <h3 style={{fontSize: "18px", fontWeight: "500", letterSpacing: "-1px"}}>{title}</h3>
                <p style={{fontSize: "10px"}}>{description}</p>
            </div>
            <div style={{width: "60%"}}>
                <img src={image} style={{width: "100%", borderRadius: "10px"}} alt="" />
            </div>
        </div>
    );
}

export default projectCards;