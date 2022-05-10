import React from "react";
import "./Info.css";
import { FaUserAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function Info(){
    return(
        <div className="Info">
            <p>Info</p>
            <ul className="infoList">
                <li>
                    <div className="infoListIcons">
                        <FaUserAlt/>
                    </div>
                    <div>
                        <p className="infoListTag">Name</p>
                        <p className="myInfo">Miguel Hernández</p>
                    </div>
                </li>
                <li>
                    <div className="infoListIcons">
                        <FaMapMarkerAlt/>
                    </div>
                    <div>
                        <p className="infoListTag">Adress</p>
                        <p className="myInfo">Benito Juárez</p>
                    </div>
                </li>
                <li>
                    <div className="infoListIcons">
                        <FaPhoneAlt/>
                    </div>
                    <div>
                        <p className="infoListTag">Phone</p>
                        <p className="myInfo">+52 222 335 1729</p>
                    </div>
                </li>
                <li>
                    <div className="infoListIcons">
                        <FaEnvelope/>
                    </div>
                    <div>
                        <p className="infoListTag">Email</p>
                        <p className="myInfo">miguelhernandezk@gmail.com</p>
                    </div>
                </li>

                <li>
                    <div className="infoListIcons">
                        <FaLink/>
                    </div>
                    <div>
                        <p className="infoListTag">Website</p>
                        <p className="myInfo">miguelhernandezmx.com</p>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export { Info };