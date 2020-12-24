import React from "react";
import { connect } from "react-redux";
import { delClose, deleteEntry } from "../redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IconButton } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

function DeleteDialog({ open, handleClose, handleConfirm }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Delete this entry?"}</DialogTitle>
      <DialogActions style={{ justifyContent: "center" }}>
        <IconButton onClick={handleConfirm}>
          <CheckIcon />
        </IconButton>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.data.delOpen,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => dispatch(delClose()),
    handleConfirm: () => dispatch(deleteEntry()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDialog);
