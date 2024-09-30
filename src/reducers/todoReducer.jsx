const initialState = {
  loading: false,
  todos: [],
  error: "",
};

const todoReducer = (state = initialState, action) => {
  if (action.type === "FETCH_TODOS_REQUEST") {
    return {
      loading: true,
      ...state,
    };
  } else if (action.type === "FETCH_TODOS_SUCCESS") {
    return {
      loading: false,
      todos: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_TODOS_FAILURE") {
    return {
      loading: false,
      todos: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default todoReducer;
