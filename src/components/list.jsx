import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux";

import { FixedSizeList as List_ } from "react-window";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, Paper } from "@material-ui/core";
import DetailCard from "./detailCard";
import DeleteDialog from "./deleteDialog";
import FormDialog from "./formDialog";
import Addbutton from "./addButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    backgroundColor: theme.palette.background.default,
    padding: 8,
  },
  list: {},
  quantity: {
    flex: "none",
  },
}));

function DataList({ data, fetchData }) {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const Row = ({ index, style }) => (
    <DetailCard style={style} entry={data.entries[index]} />
  );

  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <Paper ref={ref} elevation={8} className={classes.root}>
      <Addbutton />
      {data.loading ? (
        <div></div>
      ) : (
        <List_ height={height * 0.9} itemCount={2000} itemSize={35}>
          {Row}
        </List_>
      )}
      <DeleteDialog />
      <FormDialog />
    </Paper>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataList);
