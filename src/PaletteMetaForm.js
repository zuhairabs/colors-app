import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      stage: "form",
      newPaletteName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.showEmojiPicker = this.showEmojiPicker.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }
  
  componentDidMount(){
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
    );
  };
  
  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };
  
  showEmojiPicker(){
    this.setState({ stage: "emoji"});
  }
  
  savePalette(emoji){
    const newPalette = {
      paletteName: this.state.newPaletteName,
      emoji: emoji.native
    }
    this.props.handleSubmit(newPalette);
    this.setState({ stage: ""});
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { stage, newPaletteName } = this.state;
    const { handleSubmit, classes, palettes, hideForm } = this.props;
    return (
      <div>
        <Dialog onClose={hideForm} open={stage === "emoji"}>
          <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
          <Picker title="Click on Emoji" set="facebook" onSelect={this.savePalette} />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={hideForm}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
          <ValidatorForm onSubmit={this.showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Enter a name for your new beautiful palette.
                Make sure it's unique!
            </DialogContentText>
              <TextValidator label="Palette Name" fullWidth name="newPaletteName" margin="normal" onChange={this.handleChange} value={newPaletteName} validators={["required","isPaletteNameUnique"]} errorMessages={["Enter Palette Name", "Palette Name Already Used"]}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">
              Cancel
            </Button>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              className={classes.button}
            >
              Save Palette
            </Button>
          </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;