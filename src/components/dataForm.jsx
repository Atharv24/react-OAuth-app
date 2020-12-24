import React, { useState } from "react";
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

function InputField(props) {
  const { label, type, _default, handlechange } = props;
  return (
    <DialogContent>
      <TextField
        style={{ width: "100%" }}
        margin="dense"
        type="string"
        onChange={handlechange}
        defaultValue={_default}
        label={label}
        variant="filled"
      />
    </DialogContent>
  );
}

export default function EditDialog(props) {
  const { open, entry, handleClose, handleConfirm } = props;

  const [name, setName] = useState(entry.customer_name);
  const [email, setEmail] = useState(entry.customer_email);
  const [id, setID] = useState(entry.id);
  const [product, setProduct] = useState(entry.product);
  const [quantity, setQuantity] = useState(entry.quantity);

  function handleEmailChange(x) {
    setEmail(x.target.value);
  }

  function handleNameChange(x) {
    setName(x.target.value);
  }

  function handleIDChange(x) {
    setID(x.target.value);
  }
  function handleQuantityChange(x) {
    setQuantity(x.target.value);
  }
  function handleProductChange(x) {
    setProduct(x.target.value);
  }
  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} maxWidth="xs" fullWidth onClose={handleClose}>
        <DialogTitle>Edit Entry</DialogTitle>
        <InputField
          label="ID"
          type="number"
          _default={entry.id}
          handlechange={handleIDChange}
        />
        <InputField
          label="Name"
          type="string"
          _default={entry.customer_name}
          handlechange={handleNameChange}
        />
        <InputField
          label="Email"
          type="email"
          _default={entry.customer_email}
          handlechange={handleEmailChange}
        />
        <DialogContent>
          <TextField
            select
            style={{ width: "100%" }}
            margin="dense"
            value={entry.product}
            handlechange={handleProductChange}
            label="Product"
            variant="filled"
          >
            {[1, 2, 3].map((x) => {
              const val = "Product " + x;
              return (
                <MenuItem key={val} value={val}>
                  {val}
                </MenuItem>
              );
            })}
          </TextField>
        </DialogContent>
        <InputField
          label="Quantity"
          type="number"
          _default={entry.quantity}
          handlechange={handleQuantityChange}
        />

        <DialogActions>
          <IconButton>
            <CheckIcon
              onClick={() =>
                handleConfirm({ name, product, id, quantity, email })
              }
            />
          </IconButton>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export function DeleteDialog(props) {
  const { open, handleConfirm, handleClose } = props;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{"Delete this entry?"}</DialogTitle>
      <DialogActions style={{ justifyContent: "center" }}>
        <IconButton>
          <CheckIcon onClick={handleConfirm} />
        </IconButton>
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </DialogActions>
    </Dialog>
  );
}
