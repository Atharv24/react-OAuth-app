import * as actions from "./dataTypes";

const initialState = {
  loading: true,
  entries: [],
  error: "",
  currentID: "",
  delOpen: false,
  mode: "new",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    case actions.DELETE_OPEN:
      return {
        ...state,
        currentID: action.payload,
        delOpen: true,
      };
    case actions.DELETE_CLOSE:
      return {
        ...state,
        currentID: "",
        delOpen: false,
      };
    case actions.NEW_ENTRY:
      const entry = action.payload;
      return {
        ...state,
        entries: [entry, ...state.entries],
      };
    case actions.EDIT_ENTRY:
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry.id !== action.payload.id ? entry : { ...action.payload }
        ),
      };
    case actions.DELETE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== state.currentID),
        currentID: "",
        delOpen: false,
      };
    case actions.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        entries: action.payload,
        error: "",
      };
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        entries: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
