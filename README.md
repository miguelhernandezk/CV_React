# Getting started with Resume Modification

This Resume Layout was built using React. However, It's easy to customize the info since 
it can be modified in the CVContext file `("src/CVContext/CVContext.js")`.

<img alt="CVContext file" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/CV_React_files_CVContext.png">

Note: If you want to make changes to the layout, you need knowledge on React, CSS and HTML. 

The CVContext file I tried to make the CVContext file as easy as possible so
that you can easily identify which section fo the resume you'll be modifying. 

# Layout composition
The layout of this Resume template is divided into two different sections:
- Main Section
- Personal Info Section

The following picture will help you distinguish each one:
<img alt="Sections on template" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/CV_sections.png">

You will find a carpet for each section within the CVUI carpet. 

<img alt="Sections on template" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/SectionsCarpet.png">

## Personal Info Section
This section has four different components:
- BackgroundShape
- Info
- NamePicture
- SocialNetworks

Let's get into them. 

### Background Shape
Notice the small triangle behind my photo? That's the background shape. In this case is a inverted yellow triangle made with CSS. 
You can modify this by changing the CSS directly or by replacing the `div`in the `PersonalInfo/BackgroundShape/index.js`file.

For example, if instead of a div I use an icon imported from FontAwesome and modify the CSS, the result would be somtehing like this:

<img alt="Sections on template" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/Background_Modified.png">

### Info
Here you can find your name (first name and last name), location (city and country), phone number, email and your personal website.
You can add or delete information by modifying two files: the CVContext file and the `PersonalInfo/Info/index.js` file.

<img alt="Info component" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/info_component.png">

<img alt="CVContext Information" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/CVContext_information.png">

Adding more keys in the CVContext file will require you to add an extra entry (`<li>` tag) in the `PersonalInfo/Info/index.js` file, as follows:

<img alt="Info item" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/info_item.png">

### Name Picture
In this component you'll be able to modify your profile picture by replacing the url in the img tag. You can do this by editing the 
`PersonalInfo/NamePicture/index.js` file. 

<img alt="url for photo" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/url_picture.png">

Changing your name or career/role must be done by editing the CVContext file. 

### Social Networks
You can modify your social networks directly on the CVContext file. You can add, modify or remove social networks as you wish. If you add an extra social network, make sure you also add the corresponding `<li>`item in the `PersonalInfo/SocialNetworks/index.js` file.


## Main Section
The main section has four different components:
- SectionsHeading
- ProfileSection
- WorkEducation
- AdditionalInformation

### Sections Heading
This component is the "header" of each of the "sub-sections". It will display the text you send and you can change the icon by importing different icons and sending the corresponging name to the component. 

<img alt="url for photo" src="https://miguelhernandezmx.com/wp-content/uploads/2022/06/SectionsHeading.png">






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
