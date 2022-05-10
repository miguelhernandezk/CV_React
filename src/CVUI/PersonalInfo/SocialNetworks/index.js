import React from "react";
import "./SocialNetworks.css";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function SocialNetworks(){
    return(
        <div className="SocialNetworks">
            <p>Social</p>
            <ul className="socialList">
                <li>
                    <div className="socialListIcons">
                        <FaTwitterSquare/>
                    </div>
                </li>
                <li>
                    <div className="socialListIcons">
                        <FaFacebookSquare/>
                    </div>
                </li>
                <li>
                    <div className="socialListIcons">
                        <FaInstagramSquare/>
                    </div>
                </li>
                <li>
                    <div className="socialListIcons">
                        <FaLinkedin/>
                    </div>
                </li>
            </ul>
            <p>@miguelhmx</p>
            <div className="githubSection">
                <div>
                    <FaGithubSquare/>
                </div>
                <div className="githubSectionText">
                    <p className="socialNameTag">Github's profile:</p>
                    <p className="socialName">miguelhernandezk</p>
                </div>
            </div>
        </div>
    );
}

export { SocialNetworks };