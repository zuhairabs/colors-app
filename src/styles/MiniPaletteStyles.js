export default {
  root: {
    backgroundColor: "white",
    //border: "1px solid grey",
    borderRadius: "5px",
    padding: "0.6rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: 1
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "150px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0.3rem 0 0 0",
    color: "rgba(0,0,0,0.8)",
    paddinTop: "0.8rem",
    fontSize: "0.9rem",
    fontWeight: "600",
    fontFamily: `"Slabo 27px", serif`,
    letterSpacing: "1.5px",
    position: "relative"
  },
  emoji: {
    fontSize: "1.3rem",
    marginLeft: "0.5rem"
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-4px",
    position: "relative"
  },
  deleteIcon: {
    color: "white",
    backgroundColor: "#eb3d30",
    width: "20px",
    height: "20px",
    position: "absolute",
    right: "0px",
    top: "0px",
    zIndex: 10,
    padding: "10px",
    opacity: 0,
    transition: "all 0.3s ease-in-out"
  }
};