import React, { Component } from "react";
// import {render} from 'react-dom';
import "../styles/styles.css"
import MainContainer from "./containers/MainContainer.jsx"

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="appContainer">
        <div className="header">
          <div className="pageLogoContainer">
            {/* add image or logo here */}
          </div>
          <div className="annotationContainer">
          <span className="annotations">Annotations</span>
          </div>
        </div>
        {/* Main container */}
        <MainContainer/>
      </div>
    );
  }
}

export default App;
