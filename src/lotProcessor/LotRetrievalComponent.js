import React from "react";
import { getLots, getUserById } from "../dao/LotDao";
import { getAllUsers } from "../dao/LotDao";
import { processChange } from "./ChangeProcessor";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FirstSlideTotaliser from ".././components/slides/firstSlideTotaliser/FirstSlideTotaliser";
import ThirdSlidePlaceholder from ".././components/slides/thirdSlidePlaceholder/ThirdSlidePlaceholder";
import SecondSlide from ".././components/slides/secondSlideInformation/SecondSlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class LotRetrievalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lots: [],
      users: [],
      currentPicture: 0
    };

    this.getAllLots = this.getAllLots.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.processLots = this.processLots.bind(this);
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

  componentDidMount() {
    this._isMounted = true;
    this.getAllUsers();
    this.getAllLots();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getAllLots() {
    let newLots = getLots();
    this.processLots(newLots, this);
  }

  getAllUsers() {
    this.state.users = []
     getAllUsers().onSnapshot(snapshot =>{
      snapshot.forEach(doc => {
        this.state.users.push(doc.data());
      })
    });
  }

  processLots(newLots, t) {
    if (newLots !== undefined) {
      newLots.onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            processChange(change, t);
        });
      });
    }
  }


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
      <Header />
      <Slider {...settings}>
        <FirstSlideTotaliser lots={this.state.lots}/>
        <SecondSlide current={this.state.currentPicture} />
        <ThirdSlidePlaceholder lots={this.state.lots} />
      </Slider>
      <Footer/>
      </div>
    );
  }
}

export default LotRetrievalComponent;
