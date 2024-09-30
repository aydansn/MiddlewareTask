const initialState = {
  loading: false,
  comments: [],
  error: "",
};

const commentReducer = (state = initialState, action) => {
  if (action.type === "FETCH_COMMENTS_REQUEST") {
    return {
      loading: true,
      ...state,
    };
  } else if (action.type === "FETCH_COMMENTS_SUCCESS") {
    return {
      loading: false,
      comments: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_COMMENTS_FAILURE") {
    return {
      loading: false,
      comments: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default commentReducer;
