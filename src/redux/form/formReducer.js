import * as actions from "./formTypes";

const emptyEntry = {
  id: "",
  customer_name: "",
  customer_email: "",
  product: "",
  quantity: 0,
};

const initialState = {
  entry: emptyEntry,
  formOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FORM_OPEN: {
      return {
        ...state,
        formOpen: true,
        entry: { ...action.payload },
      };
    }
    case actions.FORM_CLOSE: {
      return {
        ...state,
        formOpen: false,
        entry: { ...emptyEntry },
      };
    }
    case actions.UPDATE_NAME: {
      return {
        ...state,
        entry: {
          ...state.entry,
          customer_name: action.payload,
        },
      };
    }
    case actions.UPDATE_EMAIL: {
      return {
        ...state,
        entry: {
          ...state.entry,
          customer_email: action.payload,
        },
      };
    }
    case actions.UPDATE_PRODUCT: {
      return {
        ...state,
        entry: {
          ...state.entry,
          product: action.payload,
        },
      };
    }
    case actions.UPDATE_QUANTITY: {
      return {
        ...state,
        entry: {
          ...state.entry,
          quantity: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
