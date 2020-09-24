import sizes from './sizes';
import bg from './bg.svg';
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    overflow: "scroll"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
        width: "80%",
    },
    [sizes.down("xs")]: {
        width: "82%",
    }
  },
  nav: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    color: "white",
    alignItems: "center",
      "& a": {
        color: "rgba(255,255,255,0.9)"
      }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
     gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(2, 50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "2rem"
    }
  },
  heading: {
    fontSize: "1.5rem",
    fontWeight: 800,
    textTransform: "uppercase",
    fontFamily: "Nanum Gothic, sans-serif"
  }
};