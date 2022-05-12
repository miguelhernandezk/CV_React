import React from "react";
import "./WorkExperience.css";

function WorkExperience({experience}){
    console.log(experience);
    return(
        <div className="WorkExperience">
            <div className="dateExperience">
                <span>2022-2022</span>
                <span>Location</span>
            </div>
            <div className="contentExperience">
                <h2>Sales Engineer</h2>
                <h3>Festo Pneumatic</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
        </div>
    );
}

export { WorkExperience };