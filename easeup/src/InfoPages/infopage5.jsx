import React from 'react'
import './infopage5.css'
import img1 from "../Images/ig5.png";
import Navigation from '../components/Navigation';
import { Link } from "react-router-dom";
const infopage5 = () => {
  return (
    <>
    <Navigation />
     <div className="if5_mainContainer">
    <div className="if5_subContainer">
      <div className="if5_gridContainer">
        <div className="if5_gridsec1">
          <div className="if5_textSection">
            <div className="if5_text1">
                Welcome,
              </div>
            <div className="if5_text2">
                Shubham Jain
              </div>
              <Link to="/Checkertable">
              <div className="if5_button">
                Get Started
              </div>
              </Link>
          </div>
        </div>
        <div className="if5_gridsec2">
          <img className="if5-img" src={img1} alt="" />
        </div>
      </div>
    </div>
  </div>
    
    </>
  )
}

export default infopage5