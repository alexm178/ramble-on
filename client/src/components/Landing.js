import React, { Component } from 'react';

import "../css/landing.css"

class Landing extends Component {


  render() {


    return (
      <div className="Landing">
        <div className="map-container">
          <img id="map" src="map.png" />
          <div className="map-text">
            Connecting<br/>
            Travelers
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
