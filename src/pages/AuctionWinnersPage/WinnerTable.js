import React, { Component } from "react";
import { getImageForLot } from "../../dao/LotDao";


class WinnerTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.state,
            imageDictionary: {}
        }
    }

    renderTableHeader() {
        let header = ["Lot image", "Lot name", "Winners Name", "Bidders Email" ]   //Object.keys(this.props.data[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData() {

        // console.log("can i get lots in pros here " , this.props.lots);
        return this.props.lots.map((item, index) => {
            const { id, lotName, currentBidderName, image, currentBidderEmail } = item
            return (
                <tr key={id}>
                    <td >{image}</td>
                    <td>{lotName}</td>
                    <td>{currentBidderName}</td>
                    <td>{currentBidderEmail}</td>
                </tr>
            )
        }).slice(0,10)
    }

    getImageUrl = lot => {
        let imageUrl = this.state.imageDictionary[lot.id];
        if (!imageUrl) {
            getImageForLot(lot.id, lot.image)
                .getDownloadURL()
                .then(url => {
                    this.setState(state => ({
                        imageDictionary: {
                            ...state.imageDictionary,
                            [lot.id]: url
                        }
                    }));
                });
                // console.log("hello Image", this.props.imageDictionary[lot.id])
        }
        return imageUrl;
    };


    render() {
        return (
            <div className="list">
                <table>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }

}


export default WinnerTable;


