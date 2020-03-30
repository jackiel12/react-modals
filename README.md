# React-Redux Application with Modals

### Instructions on how to run the app

#### Part 1
- Clone this repo onto your machine
- run ```npm install``` in the terminal to insall all dependencies
- run ```npm start``` to launch the app - it is currently hosted on Localhost 2000
- navigate to localhost:2000 on your machine to view the app

Please note: I do have a server file in this app but its only purpose is to serve static files of the application on localhost. There is no backend logic involved.

Notes on Frontend functionality: I did not have a chance to save the edit and add information in the browser (the plan was to save and access information from Local Storage). For now, I have a hard coded inital set of data in the "store.js" file that I am using for the app. when the app is started, this information is passed as my initial state and can be modified (the changes will be saved as long as the page is not refreshed).


##### Design Decisions

I chose to use the React library with the Redux state management library for modularity and scalability reasons. All elements of the application are modularized as much as possible.

The main benefit of using Redux in this application, even though it is small, is the relative ease by which functionality and state can be passed from one component to the next should the application grow. 

In this app, there are common state dependencies across components at different levels of the component heirarchy. Currently as this is a relatively small application, I am using prop-drilling to move functionality and state down from the "main container" component. 

If this application were to grow in size, and new features needed access to state from lower level components, Redux provides a common Store that allows state to be connected directly to another component even if it is not in the same component tree. 


#### Part 2

- one thing to note here is that I could not find the correct font featured in the image. so I tried to match it as best I could.

To view the markup, go to the part 2 folder in this repo and open index.html in the browser

