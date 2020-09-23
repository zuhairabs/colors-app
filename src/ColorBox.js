import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      copied: false
    }
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  
  changeCopyState(){
    this.setState({ copied: true }, () => setTimeout(() => this.setState({ copied: false }), 1500)
    );
  }
  
  render(){
    const { name, background, moreUrl, showLink, classes } = this.props;
    const {copied} = this.state;
    return(
      <CopyToClipboard onCopy={this.changeCopyState} text={background}>
        <div style={{ background: background }} className={classes.colorBox}>
        <div style={{ background: background }} className={classNames(classes.copyOverlay, {
            [classes.showOverlay]: copied,
          })} />
        <div className={classNames(classes.copyMessage, {
            [classes.showMessage]: copied,
          })}>
          <h1>Copied!!</h1>
          <p className={classes.copyText} >{background}</p>
        </div>
      <div>
        <div className={classes.boxContent}>
          <span className={ classes.colorName}>{name}</span>
        </div>
        <button className={classes.copyButton}>Copy</button>
       </div>
       { showLink && (
          <Link to={moreUrl} onClick={e => e.stopPropagation()} >
        <span className={classes.seeMore} >
          MORE
        </span>
       </Link>
       )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);