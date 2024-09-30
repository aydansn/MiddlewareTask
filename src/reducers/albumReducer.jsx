const initialState = {
  loading: false,
  albums: [],
  error: "",
};

const albumReducer = (state = initialState, action) => {
  if (action.type === "FETCH_ALBUMS_REQUES") {
    return {
      loading: true,
      ...state,
    };
  } else if (action.type === "FETCH_ALBUMS_SUCCESS") {
    return {
      loading: false,
      albums: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_ALBUMS_FAILURE") {
    return {
      loading: false,
      albums: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default albumReducer;
