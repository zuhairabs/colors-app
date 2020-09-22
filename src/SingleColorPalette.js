import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles'
import ColorBox from './ColorBox';
import PaletteFooter from './PaletteFooter';
import Navbar from './Navbar';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex" };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeFormat = this.changeFormat.bind(this);
  }
  
  gatherShades(palette, colorToFilterBy){
    let shades = [];
    let allColors = palette.colors;
    for (let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color =>
          color.id === colorToFilterBy
        )
      )
    }
    return shades.slice(1);
  }
  
  changeFormat(val){
    this.setState({
      format: val
    });
  }
  
  render(){
    const { format } = this.state;
    const { palette, classes } = this.props;
    const colorBoxes = this._shades.map(color =>
        <ColorBox key={color.name} name={color.name} background={color[format]} showLink={false} />
      )
    return(
      <div className={classes.Palette}>
        <Navbar 
          changeLevel={this.changeLevel} 
          changeFormat={this.changeFormat}
          showSlider={false}
        />
        <div className={classes.paletteColors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link to={`/palette/${palette.id}`}>Go Back</Link>
          </div>
        </div>
        <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);