import React from "react";
import "./SecondSlideInformation.css";

export default function SecondSlideInformation(props) {
  return (
    <div>
      <div style={user}>
        <img className='imgStyle' src={props.picture} />
        <div className='caption'>
          <h2>{props.caption}</h2>
        </div>
      </div>
      <h2 className='textStyle'>{props.info}</h2>
      <br />
      <div className='credit'>
        <h2>{props.credit}</h2>
      </div>
      <br />
    </div>
  );
}

const user = {
  width: "400px",
  height: "60px",
  margin: "2em 0"
};
