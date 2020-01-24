import React, { Component } from "react";
import imgBackground from "./water3.jpg";
import "./ThirdSlidePlaceholder.css";

export class ThirdSlidePlaceholder extends Component {
  render() {
    return (
      <div className='polaroid'>
        <img src={imgBackground} alt='' style={{ width: "100%" }} />
        <div className='container'>
          <p>Third slide</p>
        </div>
      </div>
    );
  }
}

export default ThirdSlidePlaceholder;
