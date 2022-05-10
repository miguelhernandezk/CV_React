import React from "react";
import "./NamePicture.css"

function NamePicture(){
    return(
        <div className="NamePicture">
            <figure>
                <img className="profilePicture" src="https://avatars.githubusercontent.com/u/65262291?v=4" alt="Mike"/>
            </figure>
            <p className="myName">
                <span>MIGUEL</span>
                <span>HERNANDEZ</span>
            </p>
            <p class="myCareer">
                Web Developer and<br/>Mechatronics engineer
            </p>
        </div>
    );
}

export { NamePicture };