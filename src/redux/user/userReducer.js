import * as actions from "./userTypes";

const emptyProfile = {
  name: "",
  email: "",
  googleId: "",
  imageUrl: "",
};

const initialState = {
  loggedIn: false,
  profile: emptyProfile,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      const person = action.payload;
      return {
        ...state,
        loggedIn: true,
        profile: {
          name: person.name,
          email: person.email,
          googleId: person.googleId,
          imageUrl: person.imageUrl,
        },
      };
    case actions.LOGOUT:
      return {
        ...state,
        loggedIn: false,
        profile: { ...emptyProfile },
      };
    default:
      return state;
  }
};

export default reducer;
