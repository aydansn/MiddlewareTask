const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postReducer = (state = initialState, action) => {
  if (action.type === "FETCH_POST_REQUEST") {
    return {
      loading: true,
      ...state, //post:[], error: "" => oldugu kimi saxla
    };
  } else if (action.type === "FETCH_POST_SUCCESS") {
    return {
      loading: false,
      posts: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_POSTS_FAILURE") {
    return {
      loading: false,
      posts: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default postReducer;
