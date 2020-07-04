const styles = {
  detailesCard: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "& h2": {
      fontSize: "2.5rem",
      margin: 0,
    },
    "& h3": {
      fontSize: "5rem",
      margin: 0,
    },
    "& h4": {
      color: "rgba(34, 40, 49, 0.85)",
      margin: "10px 0 0",
    },
    "& p": {
      color: "rgba(34, 40, 49, 0.85)",
      margin: "7px 0",
    },
    "& img": {
      marginTop: 20,
    },
  },
  detailesWrapper: {
    margin: "0 10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 7,
    boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.2)",
  },
};
export default styles;
