import React from "react";
import LotRetrievalComponent from "./lotProcessor/LotRetrievalComponent";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AuctionWinners from "./pages/AuctionWinnersPage/AuctionWinners"
import NotFound from "./pages/NotFound"

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LotRetrievalComponent} />
            <Route path="/finalPage" component={AuctionWinners} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
