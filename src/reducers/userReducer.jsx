const initialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  if (action.type === "FETCH_USERS_REQUEST") {
    return {
      loading: true,
      ...state,
    };
  } else if (action.type === "FETCH_USERS_SUCCESS") {
    return {
      loading: false,
      users: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_USERS_FAILURE") {
    return {
      loading: false,
      users: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default userReducer;
