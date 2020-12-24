import React from "react";
import { connect } from "react-redux";
import {
  editEntry,
  newEntry,
  formClose,
  updateName,
  updateEmail,
  updateProduct,
  updateQuantity,
} from "../redux";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  createMuiTheme,
  IconButton,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import { blue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: blue,
  },
});

function InputTextField({
  label,
  type,
  disabled = false,
  _default,
  handleChange,
}) {
  return (
    <DialogContent>
      <TextField
        type={type}
        style={{ width: "100%" }}
        disabled={disabled}
        margin="dense"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={_default}
        label={label}
        variant="filled"
      />
    </DialogContent>
  );
}

function InputSelectField({ label, type, value, handleChange }) {
  return (
    <DialogContent>
      <TextField
        type={type}
        select
        style={{ width: "100%" }}
        margin="dense"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        label={label}
        variant="filled"
      >
        {[1, 2, 3].map((x) => {
          const val = "Product " + x;
          return (
            <MenuItem key={x} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </TextField>
    </DialogContent>
  );
}

function FormDialog({
  open,
  mode,
  entry,
  handleClose,
  editConfirm,
  newConfirm,
  updateName,
  updateEmail,
  updateProduct,
  updateQuantity,
}) {
  const _header = mode === "edit" ? "EDIT ENTRY" : "NEW ENTRY";
  const { id, customer_name, customer_email, product, quantity } = entry;

  const _handleConfirm = () => {
    const _func = mode === "edit" ? editConfirm : newConfirm;
    _func({
      customer_name,
      id,
      customer_email,
      product,
      quantity,
    });
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} maxWidth="xs" fullWidth onClose={handleClose}>
        <DialogTitle>{_header}</DialogTitle>
        <InputTextField label="ID" disabled _default={entry.id} />
        <InputTextField
          type="string"
          label="Name"
          _default={entry.customer_name}
          handleChange={updateName}
        />
        <InputTextField
          label="Email"
          type="email"
          _default={entry.customer_email}
          handleChange={updateEmail}
        />
        <InputSelectField
          type="string"
          label="Product"
          value={entry.product}
          handleChange={updateProduct}
        />
        <InputTextField
          type="number"
          label="Quantity"
          _default={entry.quantity}
          handleChange={updateQuantity}
        />
        <DialogActions>
          <IconButton onClick={_handleConfirm}>
            <CheckIcon />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.form.formOpen,
    mode: state.data.mode,
    entry: state.form.entry,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClose: () => dispatch(formClose()),
    editConfirm: (entry) => dispatch(editEntry(entry)),
    newConfirm: (entry) => dispatch(newEntry(entry)),
    updateName: (name) => dispatch(updateName(name)),
    updateEmail: (email) => dispatch(updateEmail(email)),
    updateProduct: (product) => dispatch(updateProduct(product)),
    updateQuantity: (quantity) => dispatch(updateQuantity(quantity)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);
