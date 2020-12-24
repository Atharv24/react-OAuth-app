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
// import { FavoriteIcon, ShareIcon } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import React, { useState } from "react";

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

export default function DetailCard(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { data, handleEdit, handleDel } = props;

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
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
                {data.customer_name}
              </Typography>
              <Typography color="textSecondary">
                {open ? data.customer_email : data.product}
              </Typography>
              {open ? (
                <Typography variant="overline" color="textSecondary">
                  {data.id}
                </Typography>
              ) : null}
            </div>
            <div>
              {!open ? (
                <Typography className={classes.quantity}>
                  {"x" + data.quantity}
                </Typography>
              ) : null}
            </div>
          </CardContent>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography>{data.product + " x" + data.quantity}</Typography>
            </CardContent>
          </Collapse>
        </CardActionArea>
      </div>
      {open ? (
        <div className={classes.icons}>
          <IconButton>
            <EditIcon onClick={() => handleEdit(data)} />
          </IconButton>
          <IconButton onClick={() => handleDel(data)}>
            <DeleteIcon />
          </IconButton>
        </div>
      ) : null}
    </Card>
  );
}
