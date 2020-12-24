import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function UserCard({ show, profile }) {
  const classes = useStyles();

  const { name, email, imageUrl, googleId } = profile;
  return show ? (
    <Card className={classes.root}>
      <CardMedia
        style={{ height: 250 }}
        image={imageUrl}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography gutterBottom variant="h6" color="textSecondary">
          {email}
        </Typography>
        <Typography variant="overline" color="textSecondary">
          {googleId}
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <div></div>
  );
}

const mapStateToProps = (state) => {
  return {
    show: state.user.loggedIn,
    profile: state.user.profile,
  };
};

export default connect(mapStateToProps)(UserCard);
