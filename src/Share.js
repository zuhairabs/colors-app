import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
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
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function Share() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const url = "http://zuhairabs.github.io/colors-app/#/";
  const quote = "React Color Picker";

  return (
    <div>
      <Button aria-describedby={id}  style={{ margin: "0.5rem"}} variant="contained" color="primary" onClick={handleClick}>
        Share <ShareIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <div style={{ padding: "0.5rem"}}>
        <FacebookShareButton
                url={url}
                quote={quote}
                hashtag="#reactcolorpicker"
            >
                <FacebookIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </FacebookShareButton>
            <EmailShareButton
                url={url}
                subject={quote}
                body="Body Here"
                hashtag="#reactcolorpicker"
            >
                <EmailIcon style={{ margin: "0.2rem" }} bgStyle={{ fill: "#cf4e42" }} size={28} round={true} />
            </EmailShareButton>
            <LinkedinShareButton
                url={url}
                quote={quote}
                hashtag="#reactcolorpicker"
            >
                <LinkedinIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </LinkedinShareButton>
            <FacebookMessengerShareButton
                url={url}
                quote={quote}
                hashtag="#reactcolorpicker"
            >
                <FacebookMessengerIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </FacebookMessengerShareButton>
            <TwitterShareButton
                url={url}
                title={quote}
                hashtags={["#reactcolorpicker", "#zuhairabs", "#react"]}
                related={["@zuhairabs"]}
            >
                <TwitterIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </TwitterShareButton>
            <TelegramShareButton
                url={url}
                quote={quote}
                title={quote}
            >
                <TelegramIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </TelegramShareButton>
            <WhatsappShareButton
                url={url}
                title={quote}
                seperator=":: "
            >
                <WhatsappIcon style={{ margin: "0.2rem" }} size={28} round={true} />
            </WhatsappShareButton>
        </div>
      </Popover>
    </div>
  );
}