import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import DataList from "./components/list";

const data = require("./DummyData.json").slice(0, 20);

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "97vh",
    backgroundColor: theme.palette.primary.dark,
    padding: 16,
  },
}));

function App() {
  const classes = useStyles(theme);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <DataList data={data} />
      </div>
    </ThemeProvider>
  );
}

export default App;
