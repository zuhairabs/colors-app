import React, { Component } from 'react';
import Slider from 'rc-slider';
import './Navbar.css'
import 'rc-slider/assets/index.css';

class Navbar extends Component {
  render(){
    const { level, changeLevel } = this.props;
    return(
      <header className="Navbar">
        <div className="Logo">
          <a href="/">reactcolorpicker</a>
        </div>
        <div className="Slider-container">
           <span>Level: {level}</span>
             <div className="Slider">
         <Slider 
          defaultValue={level}
          min={100} 
          max={900}
          step={100}
          onAfterChange={changeLevel}
          handleStyle={{
            backgroundColor: "green",
            outline: "none",
            border: 2,
            borderColor: "green",
            boxShadow: "none",
            width: 13,
            height: 13,
            marginTop: -3,
           // marginLeft: -7
          }}
          trackStyle={{
            background: "none"
          }}
          railStyle={{
            height: 8
          }}
         />
        </div>
        </div>
      </header>
    );
  }
}

export default Navbar;