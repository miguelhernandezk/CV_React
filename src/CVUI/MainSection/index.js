import React from "react";
import { AdditionalInformation } from "./AdditionalInformation";
import "./MainSection.css";
import { ProfileSection } from "./ProfileSection";
import { SectionsHeading } from "./SectionsHeading";
import { WorkExperience } from "./WorkExperience";
import { CVContext } from "../../CVContext/CVContext"

function MainSection(){
    const { profile, experience, schoolExperience } = React.useContext(CVContext);
    return(
        <div className="MainSection">
            <SectionsHeading/>
            <ProfileSection
                profile = { profile }
            />

            <SectionsHeading/>
            <WorkExperience experience = {experience[0]}/>
            <WorkExperience experience = {experience[1]}/>
            <WorkExperience experience = {experience[2]}/>

            <SectionsHeading/>
            <WorkExperience experience = {schoolExperience[0]}/>
            <WorkExperience experience = {schoolExperience[1]}/>

            <SectionsHeading/>
            <AdditionalInformation/>
        </div>
    );
}

export { MainSection };