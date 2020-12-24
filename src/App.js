import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";

import { Provider } from "react-redux";
import store from "./redux/store";

import DataList from "./components/list";

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
    justifyContent: "space-between",
  },
  list: {
    display: "flex",
    height: "97vh",
  },
}));

function App() {
  const classes = useStyles(theme);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <div>hi</div>
          <div className={classes.list}>
            <DataList />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
