import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
  constructor(props){
    super(props);
    this.state ={
      currColor: "teal",
      newColorName: ""
    }
    this.updateCurrColor = this.updateCurrColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount(){
    ValidatorForm.addValidationRule("isColorNameUnique", value =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", value =>
      this.props.colors.every(({ color }) => color !== this.state.currColor)
    );
  }
  
  updateCurrColor(newColor){
    this.setState({
      currColor: newColor.hex
    });
  };
  
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  
  handleSubmit(){
    const newColor = {
      color: this.state.currColor,
      name: this.state.newColorName
    }
    this.props.addNewColor(newColor);
    this.setState({ newColorName: "" })
  }
  
  render(){
    const {paletteIsFull, classes} = this.props;
    const {currColor, newColorName} = this.state;
    return(
      <div>
        <ChromePicker className={classes.picker} color={currColor} onChangeComplete={(newColor) => (this.updateCurrColor(newColor)) } />
          <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
            <TextValidator 
              value={newColorName}
              name="newColorName"
              variant="filled"
              placeholder="Color Name"
              margin="normal"
              className={classes.colorInput}
              onChange={this.handleChange} 
              validators={["required", "isColorNameUnique", "isColorUnique"]} 
              errorMessages={["this field is required", "color already exist", "color already used"]}
            />
            <Button variant="contained" color="primary" className={classes.addColor} type='submit' disabled={paletteIsFull} style={{ backgroundColor: paletteIsFull ? "grey" : currColor}}>
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
          </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);