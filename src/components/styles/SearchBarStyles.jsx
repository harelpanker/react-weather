const styles = {
  form: {
    minHeight: 64,
    width: "100%",
    borderBottom: "white 1px solid",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingBottom: 20,
    marginBottom: 20,
  },
  label: {
    marginBottom: 7,
    textTransform: "uppercase",
    fontSize: "0.7rem",
  },
  inputWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  input: {
    width: "100%",
    height: 35,
    fontSize: "1.2rem",
    border: "none",
    borderRadius: 7,
    backgroundColor: "white",
    color: "#222831",
    padding: "0 10px",
    "&:focus": { outline: "none" },
  },
  button: {
    width: 30,
    height: 30,
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    fontSize: "2rem",
    lineHeight: 0,
    marginLeft: 10,
    padding: 2,
    cursor: "pointer",
    "& img": {
      height: 15,
      lineHeight: 0,
    },
  },
};

export default styles;
