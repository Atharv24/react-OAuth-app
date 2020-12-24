import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { List, Paper } from "@material-ui/core";
import DetailCard from "./detailCard";
import EditDialog, { DeleteDialog } from "./dataForm";

const nullEntry = {
  id: "",
  customer_name: "",
  customer_email: "",
  product: "",
  quantity: "",
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    overflow: "auto",
    backgroundColor: theme.palette.background.default,
    padding: 8,
  },
  list: {},
  quantity: {
    flex: "none",
  },
}));

export default function DataList(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [data, setData] = useState(props.data);
  const [curEntry, setCurEntry] = useState(nullEntry);
  const [delOpen, setDelOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);

  function handleDelClose() {
    setDelOpen(false);
    setCurEntry(nullEntry);
  }

  function handleDelConfirm() {
    setData(data.filter((entry) => entry.id !== curEntry.id));
    setDelOpen(false);
    setCurEntry(nullEntry);
  }

  function handleDel(entry) {
    setCurEntry(entry);
    setDelOpen(true);
  }

  function handleEditClose() {
    setCurEntry(nullEntry);
    setEditOpen(false);
  }
  function handleEditConfirm(entry) {
    const index = data.findIndex((x) => x.id == entry.id);
    const _data = data;
    _data[index] = entry;
    setData(_data);
    setCurEntry(nullEntry);
    setEditOpen(false);
  }

  function handleEdit(entry) {
    setCurEntry(entry);
    setEditOpen(true);
  }

  return (
    <Paper elevation={8} className={classes.root}>
      <List className={classes.list}>
        {data.map((entry) => (
          <DetailCard
            handleEdit={handleEdit}
            handleDel={handleDel}
            data={entry}
            key={entry.id}
          />
        ))}
      </List>
      <DeleteDialog
        open={delOpen}
        handleConfirm={handleDelConfirm}
        handleClose={handleDelClose}
      />
      <EditDialog
        open={editOpen}
        entry={curEntry}
        handleClose={handleEditClose}
        handleConfirm={handleEditConfirm}
      />
    </Paper>
  );
}
