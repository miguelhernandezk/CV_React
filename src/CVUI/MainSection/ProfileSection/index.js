import React from "react";
import "./ProfileSection.css"

function ProfileSection({profile}){
    return(
        <div className="ProfileSection">
            <p>{ profile }</p>
        </div>
    );
}

export { ProfileSection };