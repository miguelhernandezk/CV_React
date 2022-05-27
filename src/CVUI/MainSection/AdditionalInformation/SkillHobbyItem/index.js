import React from "react";
import "./SkillHobbyItem.css";

function SkillHobbyItem(props){
    return(
        <li className="SkillHobbyItem">
            { props.text }
        </li>
    );
}

export { SkillHobbyItem };