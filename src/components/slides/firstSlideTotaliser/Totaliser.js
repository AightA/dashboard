import React, { Component } from "react";
import "./Totaliser.css"

import { Spring } from 'react-spring/renderprops';

import waterpump1 from '../../../images/Waterpump1.png';
import Jerrycan from "../../../images/Jerrycan1.png";
import droplet from "../../../images/droplet.png";

class Totaliser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTotal: 0
        };
    }

    componentDidUpdate() {
        this.getTotal();
    }

    getTotal = () => {
        let total = this.props.lots.reduce(
            (total, lot) => {
                let bid = lot.data().currentBid;
                if (typeof (bid) === "number") {
                    return total + parseInt(lot.data().currentBid);
                }
                else {
                    return total;
                }
            }, 0);

        if (total !== this.state.newTotal) {
            this.setState({ newTotal: total });
        }
        return total;
    }

    render() {
        return (
            <div style={{ display: "flex" }} className="Background">
                <div className="containerTotaliser">
                    <div>
                        <h1 className="text"> Total raised so far: </h1>
                        <img src={waterpump1} alt="water pump" className="water_pump" />
                        <Spring
                            from={{ top: "45%" }}
                            to={{ top: "55%" }}
                            reset={true}
                            trail={1000}>
                            {props => <img style={{ top: props.top }} className="droplet" src={droplet} alt="Droplet" />
                            }
                        </Spring>
                    </div>
                    <div>
                        <Spring
                            from={{ number: 0 }}
                            to={{ number: this.state.newTotal }}>
                            {props => <h1 className="totalNumber">£{props.number.toFixed()}
                            </h1>}
                        </Spring>
                    </div>
                    <div>
                        <img src={Jerrycan} className="jerrycan" />
                    </div>
                </div>
            </div>
        );
    }
};

export default Totaliser;