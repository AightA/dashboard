import {Component} from "react";

import {getLots} from "../dao/LotDao";
import {processChange} from "./ChangeProcessor";


class LotRetrievalComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            lots: []
        };

        this.getAllLots = this.getAllLots.bind(this);
        this.processLots = this.processLots.bind(this);
    }

    componentDidMount() {

        this._isMounted = true;
        if (this._isMounted) {
            this.getAllLots();
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getAllLots() {
        let newLots = getLots();
        this.processLots(newLots, this);
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

}

export default LotRetrievalComponent;
