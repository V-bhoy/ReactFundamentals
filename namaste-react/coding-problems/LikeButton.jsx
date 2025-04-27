import React from 'react';
import {useState} from "react";


function LikeButton(){
    const [isHovered, setIsHovered] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const btnStyles = {
        border: `1px solid ${isHovered || isActive ? "red": "gray"}`,
        color: isHovered && !isActive? "red": isActive ? "white" :"gray",
        backgroundColor: isActive ? "red" : "white"
    }

    return (
        <button
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            onClick={()=>{setIsHovered(false);
                setIsActive(!isActive)}}
            style={btnStyles}>
            {isActive ? "🤍" : "❤️"} Like
        </button>
    );
}

export default LikeButton;