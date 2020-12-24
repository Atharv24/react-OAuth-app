import {
  Card,
  CardActionArea,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import React from "react";
import { connect } from "react-redux";
import { formOpen, changeMode } from "../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    margin: 0,
  },
}));

function AddButton({ formOpen, changeMode }) {
  const classes = useStyles;
  const handleClick = () => {
    changeMode("new");
    formOpen({ id: 1 });
  };
  return (
    <ListSubheader className={classes.root}>
      <Card>
        <CardActionArea
          onClick={handleClick}
          style={{ display: "flex", height: "4rem" }}
        >
          <AddIcon />
        </CardActionArea>
      </Card>
    </ListSubheader>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeMode: (mode) => dispatch(changeMode(mode)),
    formOpen: () => dispatch(formOpen()),
  };
};

export default connect(null, mapDispatchToProps)(AddButton);
