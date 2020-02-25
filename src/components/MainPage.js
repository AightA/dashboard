import React from "react";
import { getLots } from "../dao/LotDao";
import { processChange } from "../lotProcessor/ChangeProcessor";
import Header from "./Header";
import Footer from "./Footer";
import Confetti from "react-confetti";
import FirstSlideTotaliser from ".././components/slides/firstSlideTotaliser/FirstSlideTotaliser";
import ThirdSlidePlaceholder from ".././components/slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";
import SecondSlide from ".././components/slides/secondSlideInformation/SecondSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: [],
      currentPicture: 0,
      showingConfetti: false,
      milestone: 0
    };
  }

  componentDidMount() {
    getLots().onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        processChange(change, this);
      });
    });
  }

  changeSlide = current => {
    if (current === 1) {
      this.setState(currentState => {
        return {
          currentPicture: currentState.currentPicture + 1
        };
      });
    }
  };

  onNewTotal = (total) => {
    if (total >= this.state.milestone) {
      let newMilestone = Math.round((this.state.total + 500) / 1000) * 1000;
      this.setState({ showingConfetti: true, milestone: newMilestone });
      setTimeout(() => {
        this.setState({ showingConfetti: false });
      }, 14000);
    }
  };

  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 25000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.changeSlide(next)
    };
    return (
      <div>
        {this.state.showingConfetti && (
          <Confetti
            className="confettiBox"
            numberOfPieces='600'
            tweenDuration='5000'
            initialVelocityY='50'
          />
        )}
        <Header />
        <Slider {...settings}>
          <FirstSlideTotaliser lots={this.state.lots} onNewTotal={this.onNewTotal} />
          <SecondSlide current={this.state.currentPicture} />
          <ThirdSlidePlaceholder lots={this.state.lots} />
        </Slider>
        <Footer />
      </div>
    );
  }
}

export default MainPage;
