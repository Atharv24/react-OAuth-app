import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Collapse,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import React, { useState } from "react";
import { connect } from "react-redux";
import { changeMode, delOpen, formOpen } from "../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  cardOpen: {
    backgroundColor: theme.palette.background.paper,
    marginBottom: 8,
    display: "flex",
    justifyContent: "space-between",
  },
  body: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    display: "flex",
    flexGrow: 1,
  },
  icons: {
    display: "flex",
    flexDirection: "column",
  },
}));

function formatData(data) {
  return data === "" ? "null" : data;
}

function DetailCard({ entry, handleDel, openForm, changeMode }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const _handleEdit = () => {
    changeMode("edit");
    openForm(entry);
  };
  return (
    <Card
      elevation={0}
      variant={open ? "outlined" : "elevation"}
      className={open ? classes.cardOpen : classes.root}
    >
      <div className={classes.content}>
        <CardActionArea onClick={handleClick}>
          <CardContent className={classes.body}>
            <div>
              <Typography className={classes.title}>
                {formatData(entry.customer_name)}
              </Typography>
              <Typography color="textSecondary">
                {formatData(open ? entry.customer_email : entry.product)}
              </Typography>
              {open ? (
                <Typography variant="overline" color="textSecondary">
                  {formatData(entry.id)}
                </Typography>
              ) : null}
            </div>
            <div>
              {!open ? (
                <Typography className={classes.quantity}>
                  {"x" + entry.quantity}
                </Typography>
              ) : null}
            </div>
          </CardContent>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>
                {formatData(entry.product) + " x" + entry.quantity}
              </Typography>
            </CardContent>
          </Collapse>
        </CardActionArea>
      </div>
      {open ? (
        <div className={classes.icons}>
          <IconButton onClick={_handleEdit}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDel(entry.id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ) : null}
    </Card>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    entry: ownProps.entry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDel: (id) => dispatch(delOpen(id)),
    openForm: (entry) => dispatch(formOpen(entry)),
    changeMode: (mode) => dispatch(changeMode(mode)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCard);
