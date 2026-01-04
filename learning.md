Questions I Had:
How do I stop the footer content from overflowing during certain page widths?
- Put it in a box, and adjust the overflowing item's sx to have maxWidth of 100%


How to load the content on the path page without also loading the home page content?


How do I switch from the traditional architecture to the all React architecture?
1. Add pages folder under js folder to represent the different pages of the website
2. Translate html files into jsx files
3. 

How is this new structure going to work, going from the traditional multi-HTML page setup to full react using React Router?
There is one page that always shows - index.jsx. And React Router is responsible for connecting the path (what the url is) to components (what is shown for said path). 

How do I get my html pages to work now that I'm using webpack to run the project via npm run dev?
I need to switch my app from traditional architecture to React architecture, where webpack continues to only render one page - index.html, bundling index.jsx, and then use React Router to navigate to other pages. 

How do I center the image?
The Box needs to have a display of flex so that it can honor the attribute that centers horizontally (alignItems)
<Box 
sx={{ 
display: flex, 
alignItems: 'center'   
}}
/>

How do I make the images render properly using npm run dev (webpack)?
1. Add webpack rules for images so that webpack can recognize the image asset 
2. Update devserver (in webpack.config.js) to serve the image as intended
3. Have to render images in jsx files only now (as components), because we're using webpack to post the files and content

How do I center the header text?
sx={{ justifyContent: 'center'}}
It's all about the sx props. Had to apply it to the Toolbar component (the upper component that wraps the Box component, so that it could be applied to everyone as expected). 

How do I create a header using mui?
1. Install npm if you haven't already 
2. Install mui, react, react dom, react emotion or whatever it's called, and webpack from npm 
3. Create a jsx file (because we're dealing with JavaScript react now) to define the header component 
4. Create an entrypoint for the header component to be rendered (index.jsx). Also make sure that there is a root something in the index.html file to connect the react entrypoint to the home page 
5. Create default configuration for webpack. This is to help "deliver" or "bind" the react code to my html code automatically 
6. Update package.json so that you have a command to use the webpack configuration defined 
7. Use the command defined in package.json to run the project

How do I solve dependency conflicts?
- Pay attention to what version the dependency is trying to install. If it is "0.x", that's a sign that it's old and may be deprecated and/or renamed
- Look at what dependency is compatible with it. If it's too old, and there is no updated version of that dependency, a new one needs to be found that is compatible, I think. But figure out if there's an updated version by googling "material ui for react18", for example. 
- "npm info" the dependency for more information.  

How to add material-ui to my project?
- npm install material-ui
- it created dependency issues though.

What does react-dom do?
- react-dom is the hands of React, enabling rendering on the page. react is the brain of the operation, creating elements. 

How do I install react, now that I have nodeJs and npm finally working on my machine?
- npm install react react-dom

How do I properly install Nodejs?
- Run local terminal as administrator
- cd "$env:USERPROFILE\Downloads"
- Start-Process msiexec.exe -Wait -ArgumentList '/i node-v22.20.0-x64.msi'
- Follow proceeding prompts

Why does my project path not recognize my Node installation?
- My project path is missing both Node and npm directories

How do I fix this?
- Add Node.js to my global directory, so it can be used everywhere. by:
1. Editing system environment variables
2. Adding name and path to the system list
3. Save
4. Restart terminal and try 'node -v' & 'npm -v'. 


