import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
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
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: ""
    }
    this.goToPalette = this.goToPalette.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  };

  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }
  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <>
        <div className={classes.smallNav}>
          <div className={classes.contain}>
          <div className={classes.share}>
            <FacebookShareButton>
              <FacebookIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </FacebookShareButton>
            <EmailShareButton>
              <EmailIcon style={{ margin: "0.2rem" }} bgStyle={{fill: "#cf4e42"}} size={28} round={true} />
            </EmailShareButton>
            <LinkedinShareButton>
              <LinkedinIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </LinkedinShareButton>
            <FacebookMessengerShareButton>
              <FacebookMessengerIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </FacebookMessengerShareButton>
            <TwitterShareButton>
              <TwitterIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </TwitterShareButton>
            <TelegramShareButton>
              <TelegramIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </TelegramShareButton>
            <WhatsappShareButton>
              <WhatsappIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </WhatsappShareButton>
          </div>
          <div className={classes.me}>
                  Mine Links
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
            open={openDeleteDialog}
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