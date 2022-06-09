import React from "react";
import "./WorkEducation.css";

function WorkEducation({experience}){
    console.log(experience);
    return(
        <div className="WorkEducation">
            <div className="dateExperience">
                <span>{ experience.yearBegin }-{ experience.yearEnd }</span>
                <span>{ experience.location }</span>
            </div>
            <div className="contentExperience">
                <h2>{ experience.title }</h2>
                <h3>{ experience.company }</h3>
                <p>{ experience.description }</p>
            </div>
        </div>
    );
}

export { WorkEducation };