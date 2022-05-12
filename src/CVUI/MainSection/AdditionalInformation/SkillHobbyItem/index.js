import React from "react";
import "./SkillHobbyItem.css";

function SkillHobbyItem(props){
    return(
        <li>
            { props.text }
        </li>
    );
}

export { SkillHobbyItem };