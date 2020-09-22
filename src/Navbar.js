import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import styles from './styles/NavbarStyles';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      format: "hex",
      open: false
    }
    this.changeFormat = this.changeFormat.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }
  
  changeFormat(evt){
    this.setState({ format: evt.target.value, open:true })
    this.props.changeFormat(evt.target.value);
  }
  
  closeSnackbar(){
    this.setState({
      open: false
    })
  }
  
  render(){
    const { level, changeLevel, showSlider, classes } = this.props;
    const { format, open } = this.state;
    return(
      <header className={classes.Navbar}>
        <div className={classes.logo}>
          <Link to="/">reactcolorpicker</Link>
        </div>
             { showSlider && (
                <div>
                <span>Level: {level}</span>
             <div className={classes.slider}>
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
             )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={this.changeFormat}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar 
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={open}
          autoHideDuration={3000}
          message={<span id="message-id">Format Changed To {format.toUpperCase()}</span>}
          contentProps={{
            "aria-describedby": "message-id"
          }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton 
              onClick={this.closeSnackbar} 
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}

export default withStyles(styles)(Navbar);