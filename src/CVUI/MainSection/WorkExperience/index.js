import React from "react";
import "./WorkExperience.css";

function WorkExperience({experience}){
    console.log(experience);
    return(
        <div className="WorkExperience">
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

export { WorkExperience };