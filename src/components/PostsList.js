import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAction } from "../redux/actions/postActions";

const PostsList = () => {
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, []);

  const { loading, error, posts, post } = useSelector((data) => data);
  console.log(loading, error, posts, post);
  return (
    <>
      <SearchPost />
      <div className="posts-list">
        <h1>Total posts: {posts.length}</h1>
        {loading ? (
          <h2>loading</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          posts.map((post) => (
            <div className="post-details">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default PostsList;
