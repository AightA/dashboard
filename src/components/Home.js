import React, { Component } from "react";
import FirstSlideTotaliser from "./slides/firstSlideTotaliser/FirstSlideTotaliser";
import SecondSlideInformation from "./slides/secondSlideInformation/SecondSlideInformation";
import ThirdSlidePlaceholder from "./slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export class Home extends Component {
  render() {
    var settings = {
      infinite: true,
      speed: 500,
      //autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <FirstSlideTotaliser />
        <SecondSlideInformation />
        <ThirdSlidePlaceholder />
      </Slider>
    );
  }
}

export default Home;
