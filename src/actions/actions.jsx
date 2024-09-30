export const fetchPostsRequest = () => ({
  type: "FETCH_POST_REQUEST",
});

export const fetchPostsSuccess = (posts) => ({
  type: "FETCH_POST_SUCCESS",
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: "FETCH_POSTS_FAILURE",
  payload: error,
});

export const fetchCommentsRequest = () => ({
  type: "FETCH_COMMENTS_REQUEST",
});

export const fetchCommentsSuccess = (comments) => ({
  type: "FETCH_COMMENTS_SUCCESS",
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: "FETCH_COMMENTS_FAILURE",
  payload: error,
});

export const fetchAlbumsRequest = () => ({
  type: "FETCH_ALBUMS_REQUEST",
});

export const fetchAlbumsSuccess = (albums) => ({
  type: "FETCH_ALBUMS_SUCCESS",
  payload: albums,
});

export const fetchAlbumsFailure = (error) => ({
  type: "FETCH_ALBUMS_FAILURE",
  payload: error,
});

export const fetchPhotosRequest = () => ({
  type: "FETCH_PHOTOS_REQUEST",
});

export const fetchPhotosSuccess = (photos) => ({
  type: "FETCH_PHOTOS_SUCCESS",
  payload: photos,
});

export const fetchPhotosFailure = (error) => ({
  type: "FETCH_PHOTOS_FAILURE",
  payload: error,
});

export const fetchTodosRequest = () => ({
  type: "FETCH_TODOS_REQUEST",
});

export const fetchTodosSuccess = (todos) => ({
  type: "FETCH_TODOS_SUCCESS",
  payload: todos,
});

export const fetchTodosFailure = (error) => ({
  type: "FETCH_TODOS_FAILURE",
  payload: error,
});

export const fetchUsersRequest = () => ({
  type: "FETCH_USERS_REQUEST",
});

export const fetchUsersSuccess = (users) => ({
  type: "FETCH_USERS_SUCCESS",
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: "FETCH_USERS_FAILURE",
  payload: error,
});
//! THUNK => return tipi yeni async function yaradir. return (dispatch) parametrini qebul edir.

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsRequest()); //men request atiram, loadingi sen yandir
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => dispatch(fetchPostsSuccess(data)))
      .catch((err) => fetchPostsFailure(err));
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => dispatch(fetchCommentsSuccess(data)))
      .catch((err) => dispatch(fetchCommentsFailure(err)));
  };
};

export const fetchAlbums = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest());
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => dispatch(fetchAlbumsSuccess(data)))
      .catch((err) => dispatch(fetchAlbumsFailure(err)));
  };
};

export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(fetchPhotosRequest());
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => dispatch(fetchPhotosSuccess(data)))
      .catch((err) => dispatch(fetchPhotosFailure(err)));
  };
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest());
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => dispatch(fetchTodosSuccess(data)))
      .catch((err) => dispatch(fetchTodosFailure(err)));
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(fetchUsersSuccess(data)))
      .catch((err) => dispatch(fetchUsersFailure(err)));
  };
};
