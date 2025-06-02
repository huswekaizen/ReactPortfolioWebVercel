import React from "react";

function Button({text, icon, bgColor}) {

    const buttonStyle = {
        color: bgColor || "#f1f1f1",
        backgroundColor: "transparent",
        border: "1px, solid rgb(65, 65, 65)",
        padding: "6px 14px",
        display: "flex",
        alignItems: "center",
        borderRadius: "10px",
        fontSize: "13px",
        fontWeight: "500",
        gap: "6px",
        marginTop: "8px",
    }

    return (
        <button className="button" style={buttonStyle}>{icon}{text}</button>
    );
}

export default Button;