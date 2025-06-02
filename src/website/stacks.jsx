import React from "react";

function Stacks({logo, text}) {

    const stackStyle = {
        display: "flex",
        gap: "4px",
        backgroundColor: "#111111",
        borderRadius: "6px",
        fontSize: "16px",
    }
    
    return (
        <div className="stack" style={{ display: "flex", alignItems: "center", gap: "8px", 
                                        borderRadius: "6px", border: "1px solid rgb(82, 82, 82)", marginRight: "12px", padding: "14px 18px",
                                        cursor: "pointer", backgroundColor: "#111111"}}>
            <img style={{ width: "24px", height: "24px" }} src={logo} alt="" />
            <h3 style={{ fontSize: "20px", fontWeight: "500",}} >{text}</h3>
        </div>
    );
}

export default Stacks;