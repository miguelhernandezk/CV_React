import React from "react";
import { FaBookReader, FaCode } from "react-icons/fa";
import "./AdditionalInformation.css"
import { SkillHobbyItem } from "./SkillHobbyItem";

function AdditionalInformation({ personalData }) {
    return(
        <div className="AdditionalInformation">
            <div className="addInfoPers">
                <h3>Personal info</h3>
                <span><b>Languages: </b></span>
                <span>{ personalData[0].languages }</span>
                <br/>

                <span><b>Willing to travel: </b></span>
                <span>{ personalData[0].travel }</span>
                <br/>

                <span><b>Willing to relocate: </b></span>
                <span>{ personalData[0].relocate }</span>
                <br/>

                <span><b>Age: </b></span>
                <span>{ personalData[0].age } - { personalData[0].civilStatus }</span>
                <br/>

                <span><b>Passport: </b></span>
                <span>{ personalData[0].passport }}</span>
                <br/>

                <span><b>American Visa: </b></span>
                <span>{ personalData[0].americanVisa }</span>
                <br/>

                <span><b>Driver's License: </b></span>
                <span>{ personalData[0].driversLicense }</span>
                <br/>
            </div>
            <div className="addInfoSkills">
                <h3>Skills</h3>
                <ul>
                    {
                        personalData[1].map(skill => (
                            <SkillHobbyItem 
                                key = { skill }
                                text = { skill }
                            />
                        ))
                    }
                </ul>
            </div>
            <div className="addInfoHobbies">
                <h3>Hobbys and interests</h3>
                <ul>
                    {
                        personalData[2].map(hobby => (
                            <SkillHobbyItem 
                                key = { hobby }
                                text = { hobby }
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export { AdditionalInformation };