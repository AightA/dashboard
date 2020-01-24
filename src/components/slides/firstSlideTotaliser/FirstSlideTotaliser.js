import React from "react";
import "./FirstSlideTotaliser.css";
import LotRetrievalComponent from "../../../lotProcessor/LotRetrievalComponent.js"

export class FirstSlideTotaliser extends LotRetrievalComponent {
  render() {
    return (
      <div className='polaroid'>
        <div className='container'>
          <h1>Lots:</h1>
          <ul>{this.state.lots.map(lot => <li>{lot.data().lotName}</li>)}</ul>
        </div>
      </div>
    );
  }
}

export default FirstSlideTotaliser;
