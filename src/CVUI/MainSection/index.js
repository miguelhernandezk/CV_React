import React from "react";
import { AdditionalInformation } from "./AdditionalInformation";
import "./MainSection.css";
import { ProfileSection } from "./ProfileSection";
import { SectionsHeading } from "./SectionsHeading";
import { WorkExperience } from "./WorkExperience";
import { CVContext } from "../../CVContext/CVContext"

function MainSection(){
    const { profile, experience, schoolExperience, personalData } = React.useContext(CVContext);
    return(
        <div className="MainSection">
            <SectionsHeading
                title = "Profile"
                icon = "FaUserAlt"
            />
            <ProfileSection
                profile = { profile }
            />

            <SectionsHeading
                title = "Work Experience"
                icon = "FaSuitcase"
            />
            <WorkExperience experience = {experience[0]}/>
            <WorkExperience experience = {experience[1]}/>
            <WorkExperience experience = {experience[2]}/>

            <SectionsHeading
                title = "Education"
                icon = "FaSchool"
            />
            <WorkExperience experience = {schoolExperience[0]}/>
            <WorkExperience experience = {schoolExperience[1]}/>

            <SectionsHeading
                title = "Additional info"
                icon = "FaUserShield"
            />
            <AdditionalInformation personalData = { personalData }/>
        </div>
    );
}

export { MainSection };