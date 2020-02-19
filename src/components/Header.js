import React from "react";
import logoScotishWater from "../images/logo-scotish-water.png";
import logoWaterAid from "../images/logo-water-aid.png";

const Header = () => {
  return (
    <div className='header-container'>
      <img
        className='water-aid-logo'
        src={logoScotishWater}
        alt='WaterAid - Scottish Water Collab'
      />
      <h1 className='titleSt'>Silent Auction Dashboard</h1>
      <img
        className='water-aid-logo'
        src={logoWaterAid}
        alt='WaterAid - Scottish Water Collab'
      />
    </div>
  );
};

export default Header;
