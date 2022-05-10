import React from "react";
import "./PersonalInfo.css";
import { NamePicture } from "./NamePicture";
import { BackgroundShape } from "./BackgroundShape";
import { Info } from "./Info";
import { SocialNetworks } from "./SocialNetworks";

function PersonalInfo(){
    return(
        <div className="PersonalInfo">
            <BackgroundShape/>
            <NamePicture/>
            <Info/>
            <SocialNetworks/>
        </div>
    );
}

export { PersonalInfo }