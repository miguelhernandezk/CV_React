import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { MainSection } from "./MainSection";
import "./CVUI.css"


function CVUI(){    
    return(
        <div className="CVUI">
            <PersonalInfo/>
            <MainSection/>
        </div>
    );
}

export { CVUI }