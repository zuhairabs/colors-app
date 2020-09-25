import sizes from './sizes';
import bg from './bg.svg';
import navBg from './nav.svg';
export default {
  "@global": {
    ".fade-exit": {
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    },
    // "::-webkit-scrollbar": {
    //   display: "none"
    // }

    "::-webkit-scrollbar": {
      width: "10px",
    },
    /* Track */
"::-webkit-scrollbar-track": {
  boxShadow: "inset 0 0 5px rgba(0,0,0,0.8)", 
  backgroundColor: "rgba(245, 245, 245, 0.8)",
  borderRadius: "8px"
},
 
/* Handle */
"::-webkit-scrollbar-thumb": {
  background: "rgba(21, 28, 69, 1)",
  borderRadius: "8px"
},

/* Handle on hover */
"::-webkit-scrollbar-thumb:hover": {
  background: "rgba(21, 28, 69, 0.9)" 
}
  },
  root: {
    height: "100%",
    display: "flex",
    marginTop: "-10px",
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
    fontFamily: "Nanum Gothic, sans-serif",
    textShadow: "4px 4px rgba(0,0,0,0.4)",
    cursor: "pointer"
  },
  smallNav: {
    width: "100%",
    height: "10%",
    display: "flex",
      "& a": {
        color: "rgba(255,255,255,0.9)"
      }
  },
  contain: {
    width: "100%",
    height: "90%",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#0c2461",
    boxShadow: "11px 22px 45px rgba(0, 0, 0, 0.4)",
    backgroundImage: `url(${navBg})`,
    color: "white",
    alignItems: "center",
    zIndex: "99",
  },
  share: {
    marginLeft: "1rem", 
  },
  me: {
    marginRight: "1rem",
  },
  space: {
    margin: "2rem"
  }
};