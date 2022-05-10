import React from "react";
import { FaBookReader, FaCode } from "react-icons/fa";
import "./AdditionalInformation.css"

function AdditionalInformation() {
    return(
        <div className="AdditionalInformation">
            <div className="addInfoPers">
                <h3>Personal info</h3>
                <span><b>Languages: </b></span>
                <span>English [+8years], French[+2years]</span>
                <br/>

                <span><b>Willing to travel: </b></span>
                <span>Yes</span>
                <br/>

                <span><b>Willing to relocate: </b></span>
                <span>No</span>
                <br/>

                <span><b>Age: </b></span>
                <span>28 - Single</span>
                <br/>

                <span><b>Passport: </b></span>
                <span>Yes</span>
                <br/>

                <span><b>American Visa: </b></span>
                <span>Yes</span>
                <br/>

                <span><b>Driver's License: </b></span>
                <span>Yes</span>
                <br/>
            </div>
            <div className="addInfoSkills">
                <h3>Skills</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>REACT.js</li>
                    <li>Public Speaking</li>
                    <li>Sales Background</li>
                    <li>Assertive communication</li>
                </ul>
            </div>
            <div className="addInfoHobbies">
                <h3>Hobbys and interests</h3>
                <ul>
                    <li>Reading</li>
                    <li>Programming</li>
                    <li>Languages</li>
                    <li>Learning</li>
                    <li>Teaching</li>
                    <li>Gym</li>
                    <li>Running</li>
                </ul>
            </div>
        </div>
    );
}

export { AdditionalInformation };