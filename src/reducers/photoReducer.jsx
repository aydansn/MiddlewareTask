const initialState = {
  loading: false,
  photos: [],
  error: "",
};

const photoReducer = (state = initialState, action) => {
  if (action.type === "FETCH_PHOTOS_REQUEST") {
    return {
      loading: true,
      ...state,
    };
  } else if (action.type === "FETCH_PHOTOS_SUCCESS") {
    return {
      loading: false,
      photos: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_PHOTOS_FAILURE") {
    return {
      loading: false,
      photos: [],
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default photoReducer;
