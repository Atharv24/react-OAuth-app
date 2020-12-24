import * as actions from "./formTypes";

const emptyEntry = {
  id: "",
  customer_name: "",
  customer_email: "",
  product: "",
  quantity: 0,
};

export const formOpen = (entry = emptyEntry) => {
  return {
    type: actions.FORM_OPEN,
    payload: entry,
  };
};

export const formClose = () => {
  return {
    type: actions.FORM_CLOSE,
  };
};

export const updateEmail = (email) => {
  return {
    type: actions.UPDATE_EMAIL,
    payload: email,
  };
};

export const updateName = (name) => {
  return {
    type: actions.UPDATE_NAME,
    payload: name,
  };
};

export const updateProduct = (product) => {
  return {
    type: actions.UPDATE_PRODUCT,
    payload: product,
  };
};

export const updateQuantity = (quantity) => {
  return {
    type: actions.UPDATE_QUANTITY,
    payload: quantity,
  };
};
