import React from "react";
import "./NamePicture.css"

function NamePicture({ firstName, lastName, career, role }){
    
    return(
        <div className="NamePicture">
            <figure>
                <img className="profilePicture" src="https://avatars.githubusercontent.com/u/65262291?v=4" alt="Mike"/>
            </figure>
            <p className="myName">
                <span>{ firstName }</span>
                <span>{ lastName }</span>
            </p>
            <p className="myCareer">
                { career } / <br/>{ role}
            </p>
        </div>
    );
}

export { NamePicture };