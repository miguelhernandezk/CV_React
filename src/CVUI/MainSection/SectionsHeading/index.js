import React from "react";
import "./SectionsHeadings.css";
import { FaUserAlt } from "react-icons/fa";


function SectionsHeading(){
    return(
        <div className="SectionsHeading">
            <span> <FaUserAlt/></span>
            <p>PROFILE</p>
        </div>
    );
}

export { SectionsHeading };