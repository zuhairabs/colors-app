import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { withStyles } from '@material-ui/styles';
import MiniPalette from './MiniPalette';
import Share from './Share';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteDialog: false,
      ShareDialog: false,
      deletingId: ""
    }
    this.goToPalette = this.goToPalette.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.openShareDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.closeShareDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  };

  openDialog(id) {
    this.setState({ deleteDialog: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ deleteDialog: false, deletingId: "" });
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  };

  openShareDialog(){
    this.setState({ shareDialog: true });
  }

  closeShareDialog(){
    this.setState({ shareDialog: false });
  }

  render() {
    const { palettes, classes } = this.props;
    const { deleteDialog, shareDialog } = this.state;

    return (
      <>
        <div className={classes.smallNav}>
          <div className={classes.contain}>
          <div className={classes.share}>
            <Share shareDialog={shareDialog} openShareDialog={this.openShareDialog} closeShareDialog={this.closeShareDialog}/>
          </div>
          <div className={classes.me}>
            <a className="made" target="_blank" rel="noopener noreferrer" href="https://zuhairabs.github.io">Made with <span style={{ color: "#cf4e42" }} role="img" aria-label="heart" aria-labelledby="heart">❤️</span> by Zuhair Abbas</a>
            <a className="git" target="_blank" rel="noopener noreferrer" href="http://github.com/zuhairabs"><i style={{marginLeft: "1rem"}} className="fa fa-github fa-2x"></i></a>
          </div>
          </div>
        </div>
        <div className={classes.root}>
          <div className={classes.container}>
            <nav className={classes.nav}>
              <h1 className={classes.heading}>React Colors</h1>
              <Link to="/palette/new">Create Palette</Link>
            </nav>
            <TransitionGroup className={classes.palettes}>
              {palettes.map(palette => (
                <CSSTransition key={palette.id} classNames='fade' timeout={500}>
                  <MiniPalette id={palette.id} key={palette.id} openDialog={this.openDialog} {...palette} handleClick={this.goToPalette} />
                </CSSTransition>
              ))}
            </TransitionGroup>
            <div className={classes.space}></div>
          </div>
          <Dialog
            open={deleteDialog}
            aria-labelledby='delete-dialog-title'
            onClose={this.closeDialog}
          >
            <DialogTitle id='delete-dialog-title'>
              Delete This Palette?
          </DialogTitle>
            <List>
              <ListItem button onClick={this.handleDelete}>
                <ListItemAvatar>
                  <Avatar
                    style={{ backgroundColor: blue[100], color: blue[600] }}
                  >
                    <CheckIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Delete' />
              </ListItem>
              <ListItem button onClick={this.closeDialog}>
                <ListItemAvatar>
                  <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                    <CloseIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary='Cancel' />
              </ListItem>
            </List>
          </Dialog>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(PaletteList);