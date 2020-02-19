import React, { Component } from "react";
import { getCountries, getImageForCountry } from "../../../dao/LotDao";
import SecondSlideInformation from "./SecondSlideInformation.js";

class SecondSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount() {
    let countries = getCountries();
    countries.get().then(docs => {
      docs.forEach(doc => {
        let data = doc.data();
        getImageForCountry(data.name)
          .getDownloadURL()
          .then(url => {
            this.setState(state => ({
              countries: state.countries.concat({
                name: data.name,
                caption: data.caption,
                credit: data.credit,
                info: data.info,
                pic: url
              })
            }));
          });
      });
    });
  }

  getData = current => {
    let length = this.state.countries.length;
    if (length === 0) {
      return ["", "Hello"];
    }
    let country = this.state.countries[current % length];
    return [country.pic, country.caption, country.credit, country.info];
  };

  render() {
    let [pic, caption, credit, info] = this.getData(this.props.current);
    return (
      <SecondSlideInformation
        picture={pic}
        caption={caption}
        credit={credit}
        info={info}
      />
    );
  }
}

export default SecondSlide;
