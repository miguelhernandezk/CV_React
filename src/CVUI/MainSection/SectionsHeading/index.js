import React from "react";
import "./SectionsHeadings.css";
import { FaUserAlt, FaSuitcase, FaSchool, FaUserShield } from "react-icons/fa";


function SectionsHeading(props){
    switch (props.icon){
        case "FaUserAlt":
            return(
                <div className="SectionsHeading">
                    <span> <FaUserAlt/></span>
                    <p>{ props.title }</p>
                </div>
            )
        case "FaSuitcase":
            return(
                <div className="SectionsHeading">
                    <span> <FaSuitcase/></span>
                    <p>{ props.title }</p>
                </div>
            )
        case "FaSchool":
            return(
                <div className="SectionsHeading">
                    <span> <FaSchool/></span>
                    <p>{ props.title }</p>
                </div>
            )
        case "FaUserShield":
            return(
                <div className="SectionsHeading">
                    <span> <FaUserShield/></span>
                    <p>{ props.title }</p>
                </div>
        );
        default: 
                return null;
    }
}

export { SectionsHeading };