# Getting started with Resume Modification

This Resume Layout was built using React. However, It's easy to customize the info since 
it can be modified in the CVContext file `("src/CVContext/CVContext.js")`.

<p align="center">
<img alt="CVContext file" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/CV_React_files_CVContext.png">
</p>

**Note: If you want to make changes to the layout, you need knowledge on React, CSS and HTML.**

I tried to make the CVContext file as easy as possible so
that you can easily identify which section fo the resume you'll be modifying. 

In order to create your own resume, start by starring and forking this project :)

# Layout composition
The layout of this Resume template is divided into two different sections:
- Main Section
- Personal Info Section

The following picture will help you distinguish each one:
<p align="center">
<img alt="Sections on template" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/CV_sections.png">
</p>

You will find a carpet for each section within the CVUI carpet. 

<p align="center">
<img alt="Sections on template" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/SectionsCarpet.png">
</p>

## Personal Info Section
This section has four different components:
- [BackgroundShape](#background-shape)
- [NamePicture](#name-picture)
- [Info](#info)
- [SocialNetworks](#social-networks)

Let's get into them. 

### Background Shape
Notice the small triangle behind my photo? That's the background shape. In this case is a inverted yellow triangle made with CSS. 
You can modify this by changing the CSS directly or by replacing the `div`in the `PersonalInfo/BackgroundShape/index.js`file.

For example, if instead of a div I use an icon imported from FontAwesome and modify the CSS, the result would be somtehing like this:

<p align="center">
<img alt="Sections on template" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/Background_Modified.png">
</p>

### Name Picture
In this component you'll be able to modify your profile picture by replacing the url in the img tag. You can do this by editing the 
`PersonalInfo/NamePicture/index.js` file. 

<p align="center">
<img alt="Name picture Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/NamePicture.png">
</p>

<p align="center">
<img alt="url for photo" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/url_picture.png">
</p>

Changing your name or career/role must be done by editing the CVContext file. 

### Info
Here you can find your name (first name and last name), location (city and country), phone number, email and your personal website.
You can add or delete information by modifying two files: the CVContext file and the `PersonalInfo/Info/index.js` file.

<p align="center">
<img alt="Info Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/info_component.png">
</p>

<p align="center">
<img alt="CVContext Information" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/CVContext_information.png">
</p>

Adding more keys in the CVContext file will require you to add an extra entry (`<li>` tag) in the `PersonalInfo/Info/index.js` file, as follows:

<p align="center">
<img alt="Info item" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/info_item.png">
</p>

### Social Networks
You can modify your social networks directly on the CVContext file. You can add, modify or remove social networks as you wish. If you add an extra social network, make sure you also add the corresponding `<li>`item in the `PersonalInfo/SocialNetworks/index.js` file.

<p align="center">
<img alt="Social Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/socialNetworks.png">
</p>



## Main Section
The main section has four different components:
- SectionsHeading
- ProfileSection
- WorkEducation
- AdditionalInformation

### Sections Heading
This component is the "header" of each of the "sub-sections". It will display the text you send. You can change the icon by importing different icons and sending the corresponging name to the component. 

<p align="center">
<img alt="Section Heading" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/SectionsHeading.png">
</p>

Changing the "section heading" text can be done by modifying the `MainSection/index.js` file. Just change the values (props).

<p align="center">
<img alt="Section Heading props" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/SectionHeadingProps.png">
</p>

If you want to know the names of every icon you can use, please go to the [React icons page](https://react-icons.github.io/react-icons/). In this template I use Font awesome Icons (just because I like them). 

If you are changing the icon name, you have to do this extra step:

Go to the `MainSection/SectionsHeading/index.js` file and change the switch case to math the name of your icon. 
DON'T FORGET TO IMPORT YOUR NEW ICON IN THIS FILE! 

<p align="center">
<img alt="Icon of section heading" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/IconSectionHeading.png">
</p>

### Profile Section. 
This section is a short summary of your work experience, skills, achievements and goals. You can modify its content in the CVContext file.

<p align="center">
<img alt="Profile Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/ProfileSection.png">
</p>
<p align="center">
<img alt="Profile Text" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/ProfileText.png">
</p>

### Work Education. 
This component is meant to show your education and your work experience. I use the same component for both. 

<p align="center">
<img alt="Work Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/WorkSection.png">
<img alt="Education Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/EducationSection.png">
</p>

You can modify this in the CVContext file. You can add or remo experience, however I strongly recommend not to add more than three in each case. 

<p align="center">
<img alt="Work experience" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/WorkExperience.png">
</p>
<p align="center">
<img alt="School experience" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/SchoolExperience.png">
</p>

### Additional information. 
This component is meant to show extra information that most companies ask for. Depending on your region, some of it might be irrelevant. However, if you are in Latin America, I strongly recommend you to keep this info. I'll call this the "Personal extra info"

<p align="center">
<img alt="Education Section (Component)" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/AdditionalInfoSection.png">
</p>

You can also show your interests, hobbies and skilss in this section. 

Modifying the values of the information can be done by editing the CVContext file. 

<p align="center">
<img alt="CVContext additional information" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/InfoHobbiesSkills.png">
</p>

Adding or removing "Personal extra info" will also require you to modify the `MainSection/AdditionalInformation/index.js` file in order to add or remove what will be shown. 

<p align="center">
<img alt="Modifying personal extra info" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/AdditionalInfoModify.png">
</p>

# Editing styles, colors ans font. 
Every component has its own carpet. Every carpet has at least two files: 
- `index.js``
- CSS file

You can edit the CSS of each component individually. Just go to the corresponding CSS file and start editing. You may add or remove classes in the index file as needed. 

Even if different colors are found in the CSS files, there are two main colors.

You can edit the main colors by changing its value in the `src/index.css` file. 

<p align="center">
<img alt="editing main colors" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/mainColors.png">
</p>

If you want to modify the font, you can do it as in vanilla HTML, CSS and JS. I use google fonts. 
1. Go to the `public/index.html` file and add your info ("link" tags) in the head section.
2. Then go to the `src/index.css` file and in `body`change your font family.

If you want to know more about google fonts, go to their [site](https://fonts.google.com/)

# Getting your resume in PDF format
There are two ways to get your resume in PDF format:
1. Make this project live
2. Use your development environment (`npm install -> npm start`)

Whichever you use, in your browser, print the web page (`⌘P` on mac, or `ctrl + P` on windows) and save your file. 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
