import * as actions from "./dataTypes";
const genRanHex = () =>
  [...Array(24)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

export const changeMode = (mode) => {
  return {
    type: actions.CHANGE_MODE,
    payload: mode,
  };
};

export const delOpen = (id) => {
  return {
    type: actions.DELETE_OPEN,
    payload: id,
  };
};

export const delClose = () => {
  return {
    type: actions.DELETE_CLOSE,
  };
};

export const deleteEntry = () => {
  return {
    type: actions.DELETE_ENTRY,
  };
};

export const newEntry = (entry) => {
  return {
    type: actions.NEW_ENTRY,
    payload: { ...entry, id: genRanHex() },
  };
};

export const editEntry = (entry) => {
  return {
    type: actions.EDIT_ENTRY,
    payload: entry,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());
    fetch("data.json")
      .then((res) => res.json())
      .then((res) => dispatch(fetchDataSuccess(res)))
      .catch((error) => dispatch(fetchDataFailure(error.message)));
  };
};

export const fetchDataRequest = () => {
  return {
    type: actions.FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (entries) => {
  return {
    type: actions.FETCH_DATA_SUCCESS,
    payload: entries,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: actions.FETCH_DATA_FAILURE,
    payload: error,
  };
};
