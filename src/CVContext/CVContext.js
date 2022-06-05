import React from "react";

const CVContext = React.createContext();

function CVProvider(props) {

    const [information, setInformation] = React.useState({
        firstName: "Miguel",
        lastName: "Hernández",
        career: "Web Developer", // Or title
        role: "React Developer Jr.", // Desired role
        city: "Puebla",
        country: "Mexico", 
        phone: "+52 1 222 335 1729",
        email: "miguelhernandezk@gmail.com",
        website: "miguelhernandezmx.com",
    });

    const [socialMedia, setSocialMedia] = React.useState({
        // Write your social media profile
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
            yearBegin: "2022",
            yearEnd: "current", 
            location: "Mexico",
            title: "Web Developer",
            company: "Personal Projects",
            description: `Personal web applications design: Consume Rest API's, Front-End with
                        vanilla JS and React.js, CSS frameworks: tailwind and bootstrap. `,
        },
        {
            position: 2,
            yearBegin: "2018",
            yearEnd: "current", 
            location: "Toluca, Mexico",
            title: "Consultant sales engineer",
            company: "Festo Pneumatic SA",
            description: `I give customer service to several Automotive Indsutry customers. 
                         I advice, provide engineering solutions and train several people
                         on new industrial automation products/trends`,
        },
        {
            position: 3,
            yearBegin: "2016",
            yearEnd: 2017, 
            location: "Beijing, China",
            title: "Computer vision developer",
            company: "Beihang university",
            description: `I developed a simple computer vision system using Matlab and Python. 
                          System consisted in aqcuiring images from a camera, using convolutional
                          neural networks for processing and identifying 0-9 numbers`,
        }
    ]);

    const [schoolExperience, setSchoolExperience] = React.useState([
        {
            position: 1,
            yearBegin: "2011",
            yearEnd: 2017, 
            location: "Mexico City",
            title: "Bachelor in Mechatronics",
            company: "Instituto Politècnico Nacional",
            description: null,
        },
        {
            position: 2,
            yearBegin: "2022",
            yearEnd: "current", 
            location: "Mexico",
            title: "Web development and Machine Learning",
            company: "Platzi",
            description: null,
        },
    ]);

    const [personalData, setPersonalData] = React.useState([
        {
            languages: "English[+8 years], French[+2years]",
            travel: "Yes",
            relocate: "Yes",
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