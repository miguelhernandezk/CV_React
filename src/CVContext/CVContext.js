import React from "react";

const CVContext = React.createContext();

function CVProvider(props) {

    const [information, setInformation] = React.useState({
        firstName: "Miguel",
        lastName: "Hernández",
        career: "Web Developer",
        role: "React Developer Jr.",
        city: "Puebla",
        country: "Mexico",
        phone: "+52 1 222 335 1729",
        email: "miguelhernandezk@gmail.com",
        website: "miguelhernandezmx.com",
    });

    const [socialMedia, setSocialMedia] = React.useState({
        linkedin: "@miguelhmx",
        twitter: "@miguelhmx",
        facebook: "@miguelhmx",
        instagram: "@miguelhmx",
        github: "@miguelhernandezk",
    });

    const [profile, setProfile] = React.useState(
        `I am a frontend web developer with experience in vanilla JavaScript, HTML, CSS, as well 
        as React.js library. I have some experience programming in Python and developing some 
        personal web applications. My sales background makes me good at understanding customer
        requirements and customer service. `
    );

    const [experience, setExperience] = React.useState([
        {
            position: 1,
            yearBegin: "2018",
            yearEnd: 2022, 
            location: "Puebla",
            title: "Sales engineer",
            company: "Festo Pneumatic SA",
            description: `Hello
                          My name     `,
        },
        {
            position: 2,
            yearBegin: "2019",
            yearEnd: 2022, 
            location: "Puebla",
            title: "Sales engineer",
            company: "Festo Pneumatic SA",
            description: `Hello
                          My name     `,
        },
        {
            position: 3,
            yearBegin: "2020",
            yearEnd: 2022, 
            location: "Puebla",
            title: "Sales engineer",
            company: "Festo Pneumatic SA",
            description: `Hello
                          My name     `,
        }
    ]);

    const [schoolExperience, setSchoolExperience] = React.useState([
        {
            position: 1,
            yearBegin: "2020",
            yearEnd: 2022, 
            location: "Puebla",
            title: "Sales engineer",
            company: "Festo Pneumatic SA",
            description: `Hello
                          My name     `,
        },
        {
            position: 2,
            yearBegin: "2020",
            yearEnd: 2022, 
            location: "Puebla",
            title: "Sales engineer",
            company: "Festo Pneumatic SA",
            description: `Hello
                          My name     `,
        },
        {
            position: 3,
            yearBegin: "2020",
            yearEnd: 2022, 
            location: "Puebla",
            title: "Sales engineer",
            company: "Festo Pneumatic SA",
            description: `Hello
                          My name     `,
        },
    ]);

    const [personalData, setPersonalData] = React.useState([
        {
            languages: "English[+8 years], French[+2years]",
            travel: "Yes",
            relocate: "No",
            age: 28,
            civilStatus: "Single",
            passport: "yes",
            americanVisa: "yes",
            driversLicense: "yes",
        },
        [
            "JavaScript",
            "CSS",
            "HTML",
            "React.js",
            "Public speaking",
            "Sales",
            "Assertive communication",
        ],
        [
            "Reading",
            "Programming",
            "Languages",
            "Learning",
            "Teaching",
            "Gym",
            "Running",
        ],
    ]);
    
    return(
        <CVContext.Provider value={{
            information,
            socialMedia,
            profile, 
            experience,
            schoolExperience,
            personalData,
        }}>
            {props.children}
        </CVContext.Provider>
    )
}

export { CVContext, CVProvider };