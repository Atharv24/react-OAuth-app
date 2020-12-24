import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, Paper } from "@material-ui/core";
import DetailCard from "./detailCard";
import DeleteDialog from "./deleteDialog";
import FormDialog from "./formDialog";
import Addbutton from "./addButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
    padding: 8,
  },
  quantity: {
    flex: "none",
  },
}));

function DataList({ data, show, fetchData }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  useEffect(() => {
    fetchData();
  }, []);

  return show ? (
    <Paper elevation={8} className={classes.root}>
      <Addbutton />
      <List style={{ padding: 8 }}>
        {data.loading ? (
          <div></div>
        ) : (
          data.map((entry) => <DetailCard entry={entry} key={entry.id} />)
        )}
      </List>
      <DeleteDialog />
      <FormDialog />
    </Paper>
  ) : (
    <div></div>
  );
}

const mapStateToProps = (state) => {
  return {
    show: state.user.loggedIn,
    data: state.data.entries.slice(0, 500),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
