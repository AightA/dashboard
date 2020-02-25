import React, { Component } from "react";
import "./Totaliser.css";
import { Spring } from "react-spring/renderprops";

import waterpump1 from "../../../images/Waterpump1.png";
import Jerrycan from "../../../images/Jerrycan1.png";
import droplet from "../../../images/droplet.png";

class Totaliser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        total: 0
    };
  }

  componentDidUpdate() {
    const newTotal = this.getTotal();
    if (newTotal !== this.state.total) {
      this.setState({ total: newTotal },  this.props.onNewTotal(this.state.total));
    }
  }

  getTotal = () => {
    let total = this.props.lots.reduce((total, lot) => {
      let bid = lot.currentBid;
      if (typeof bid === "number") {
        return total + parseInt(lot.currentBid);
      } else {
        return total;
      }
    }, 0);

    return total;
  };

  onNewTotal = () => {
    if (this.state.total >= this.state.milestone) {
      let newMilestone =  Math.round((this.state.total + 500)/1000)*1000;
      this.setState({ showingConfetti: true, milestone: newMilestone });
      setTimeout(() => {
        this.setState({ showingConfetti: false });
      }, 14000);
    }
  };

  render() {
    return (
      <div style={{ display: "flex" }} className="Background">
        <div className="containerTotaliser">
          <div>
            <h1 className="text"> Total raised so far: </h1>
            <img src={waterpump1} alt="water pump" className="water_pump" />
            <Spring
              config={{ duration: 1000 }}
              from={{ top: "60%" }}
              to={{ top: "70%" }}
              trail={1000}
              reset={true}
            >
              {props => (
                <img
                  style={{ top: props.top }}
                  className="droplet"
                  src={droplet}
                  alt="Droplet"
                />
              )}
            </Spring>
          </div>
          <div>
            <Spring from={{ number: 0 }} to={{ number: this.state.total }}>
              {props => (
                <h1 className="totalNumber">£{props.number.toFixed()}</h1>
              )}
            </Spring>
          </div>
          <div>
            <img src={Jerrycan} className="jerrycan" alt="Jerrycan" />
          </div>
        </div>
      </div>
    );
  }
}

export default Totaliser;
