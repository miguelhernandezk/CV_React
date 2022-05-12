import React from "react";
import "./PersonalInfo.css";
import { NamePicture } from "./NamePicture";
import { BackgroundShape } from "./BackgroundShape";
import { Info } from "./Info";
import { SocialNetworks } from "./SocialNetworks";
import { CVContext } from "../../CVContext/CVContext";

function PersonalInfo(){
    const { information, socialMedia } = React.useContext(CVContext);
    return(
        <div className="PersonalInfo">
            <BackgroundShape/>
            <NamePicture 
                firstName = { information.firstName }
                lastName = { information.lastName}
                career = { information.career }
                role = { information.role }
            />
            <Info 
                information = { information }
            />
            <SocialNetworks
                twitter = { socialMedia.twitter }
                linkedin = { socialMedia.linkedin }
                facebook = { socialMedia.facebook }
                instagram = { socialMedia.instagram }
                github = { socialMedia.github }
            />
        </div>
    );
}

export { PersonalInfo }