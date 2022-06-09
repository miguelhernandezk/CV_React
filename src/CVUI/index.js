import React from "react";
import { PersonalInfo } from "./PersonalInfo";
import { MainSection } from "./MainSection";
import "./CVUI.css"


function CVUI(){    
    return(
        // Display PersonalInfo section and MainSection in a single A4 page
        <section className="CVUI">
            <PersonalInfo/>
            <MainSection/>
        </section>
    );
}

export { CVUI }