import React, { useEffect } from "react";
import { fetchAlbums, fetchPosts } from "./actions/actions"; //thunk - async action import etdik
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "./actions/actions";
import { fetchPhotos } from "./actions/actions";
import { fetchTodos } from "./actions/actions";
import { fetchUsers } from "./actions/actions";
function App() {
  const dispatch = useDispatch();
  const postData = useSelector((state) => state.postData);
  const commentData = useSelector((state) => state.commentData);
  const albumData = useSelector((state) => state.albumData);
  const photoData = useSelector((state) => state.photoData);
  const todoData = useSelector((state) => state.todoData);
  const userData = useSelector((state) => state.userData);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  console.log(postData);

  useEffect(() => {
    dispatch(fetchComments());
  }, []);

  console.log(commentData);

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  console.log(albumData);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  console.log(photoData);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log(todoData);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(userData);

  return (
    <div>
      <div>
        {postData.loading ? (
          <p>LOADING....</p>
        ) : postData.error ? (
          <p>{postData.error}</p>
        ) : (
          postData.posts.map((post, key) => <div key={key}>{post.title}</div>)
        )}
      </div>
      <div>
        {commentData.loading ? (
          <p>LOADING....</p>
        ) : commentData.error ? (
          <p>{commentData.error}</p>
        ) : (
          commentData.comments.map((comment, key) => (
            <div style={{ border: "2px solid red" }} key={key}>
              <div>
                <div>{comment.name}</div>
                <div>{comment.email}</div>
                <div>{comment.body}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div>
        {albumData.loading ? (
          <p>LOADING....</p>
        ) : albumData.error ? (
          <p>{albumData.error}</p>
        ) : (
          albumData.albums.map((album, key) => (
            <div style={{ border: "2px solid yellow" }} key={key}>
              <div>
                <div>{album.id}</div>
                <div>{album.title}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div>
        {photoData.loading ? (
          <p>LOADING....</p>
        ) : photoData.error ? (
          <p>{photoData.error}</p>
        ) : (
          photoData.photos.map((photo, key) => (
            <div style={{ border: "2px solid green" }} key={key}>
              <div>
                <div>{photo.title}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div>
        {todoData.loading ? (
          <p>LOADING....</p>
        ) : todoData.error ? (
          <p>{todoData.error}</p>
        ) : (
          todoData.todos.map((todo, key) => (
            <div style={{ border: "2px solid orange" }} key={key}>
              <div>
                <div>{todo.title}</div>
              </div>
            </div>
          ))
        )}
      </div>

      <div>
        {todoData.loading ? (
          <p>LOADING....</p>
        ) : todoData.error ? (
          <p>{todoData.error}</p>
        ) : (
          todoData.todos.map((todo, key) => (
            <div style={{ border: "2px solid pink" }} key={key}>
              <div>
                <div>{todo.title}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
