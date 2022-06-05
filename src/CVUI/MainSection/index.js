import React from "react";
import { AdditionalInformation } from "./AdditionalInformation";
import "./MainSection.css";
import { ProfileSection } from "./ProfileSection";
import { SectionsHeading } from "./SectionsHeading";
import { WorkEducation } from "./WorkEducation";
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
            <WorkEducation experience = {experience[0]}/>
            <WorkEducation experience = {experience[1]}/>
            <WorkEducation experience = {experience[2]}/>

            <SectionsHeading
                title = "Education"
                icon = "FaSchool"
            />
            <WorkEducation experience = {schoolExperience[0]}/>
            <WorkEducation experience = {schoolExperience[1]}/>

            <SectionsHeading
                title = "Additional info"
                icon = "FaUserShield"
            />
            <AdditionalInformation personalData = { personalData }/>
        </div>
    );
}

export { MainSection };