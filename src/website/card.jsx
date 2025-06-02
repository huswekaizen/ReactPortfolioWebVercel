import React from "react";
import { FaLeaf } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Card({experience, year, details}) {

    const Style = {
        display: "flex",
        flexDirection: "column",
        
        alignItems: "center",
        height: "40vh",
        marginTop: "20px"
    }

    const expStyle = {
        backgroundColor: "#111111",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderRadius: "3px",
        gap: "6px",
        textAlign: "center",
    }

    const yearStyle = {
        backgroundColor: "",
        border: "2px solid rgb(105, 105, 105)",
        borderRadius: "55px",
        padding: "8px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "16px"
    }

    return (
        <div style={Style}>
            <div style={yearStyle} className="year">
                <h1 style={{fontSize: "44px", margin: "0"}}>{year}</h1>
            </div>
            <div style={expStyle} className="exp">
                <h6 style={{fontSize: "16px"}}>{experience}</h6>
                <p style={{fontSize: "11px"}}>{details}</p>
            </div>
        </div>
    );
}

export default Card;