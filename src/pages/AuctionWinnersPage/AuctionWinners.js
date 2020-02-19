import React, { Component } from "react";
import AuctionWinnersPage from "./AuctionWinnersPage"


import LotRetrievalComponent from "../../lotProcessor/LotRetrievalComponent";
import { getImageForLot, getCurrentBiddersFullNames } from "../../dao/LotDao";

import "./AuctionWinnersPage.css";

export class AuctionWinners extends LotRetrievalComponent {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            imageDictionary: {}
        }
    }

    render() {
        return (
            <div className="screen">
                <div className="background" style={{ display: "flex", flexDirection: "row" }}>
                    <h2 className="listText"> Congratulations! </h2>
                    <div>
                        <AuctionWinnersPage lots={this.state.lots} users={this.state.users} images={this.state.imageDictionary}  />
                    </div>
                </div>
                <h1 className="footerText"> Please visit the WaterAid event table to claim your item.</h1>
            </div>
        );
    }
}

export default AuctionWinners;