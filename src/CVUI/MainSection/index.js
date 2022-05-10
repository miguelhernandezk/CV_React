import React from "react";
import { AdditionalInformation } from "./AdditionalInformation";
import "./MainSection.css";
import { ProfileSection } from "./ProfileSection";
import { SectionsHeading } from "./SectionsHeading";
import { WorkExperience } from "./WorkExperience";

function MainSection(){
    return(
        <div className="MainSection">
            <SectionsHeading/>
            <ProfileSection/>

            <SectionsHeading/>
            <WorkExperience/>
            <WorkExperience/>
            <WorkExperience/>

            <SectionsHeading/>
            <WorkExperience/>
            <WorkExperience/>

            <SectionsHeading/>
            <AdditionalInformation/>
        </div>
    );
}

export { MainSection };