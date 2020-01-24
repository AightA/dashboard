import React, { Component } from "react";
import "./SecondSlideInformation.css";
import imgBackground1 from "./water2.jpg";
import imgBackground2 from "./water22.jpg";
import imgBackground3 from "./water222.jpg";

const imageChange = [
  {
    imageUrl: imgBackground1,
    text: "Hello world."
  },
  {
    imageUrl: imgBackground2,
    text: "WaterAid is great ."
  },
  {
    imageUrl: imgBackground3,
    text: " the Serengeti is beautiful."
  }
];

export class SecondSlideInformation extends Component {
  state = {
    pic: [],
    text: ""
  };

  componentDidMount() {
    setInterval(() => {
      this.shuffle(imageChange);
    }, 4000);
  }
  shuffle = arr => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    //console.log("this is arr" + arr[0].imageUrl);
    this.setState({
      pic: arr[0].imageUrl,
      text: arr[0].text
    });
  };
  render() {
    const { pic, text } = this.state;
    return (
      <div className='polaroid'>
        <img src={pic} alt='' style={{ width: "70%" }} />
        <div className='container'>
          <p>{text}</p>
        </div>
      </div>
    );
  }
}

export default SecondSlideInformation;
