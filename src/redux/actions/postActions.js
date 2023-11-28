import axios from "axios";
import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  SEARCH_POST_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "./postActionTypes";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";
// actions
// 1. fetch posts (request started, success, error)

// fetch posts request
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};
// fetch posts success
const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};
// fetch posts error
const fetchPostsErr = (error) => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error,
  };
};

// fetch all posts action (redux-thunk method)
export const fetchPostsAction = () => {
  return async (dispatch) => {
    // request action
    dispatch(fetchPostsRequest());
    try {
      const res = await axios.get(apiUrl);
      // success action
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      // error action
      dispatch(fetchPostsErr(error));
    }
  };
};

// 2. fetch post (request started, success, error)
// request action
const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};

// success action
const fetchPostSuccess = (post) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

// error action
const fetchPostErr = (error) => {
  return {
    type: SEARCH_POST_FAILURE,
    payload: error,
  };
};

// fetch single post action
export const fetchPostAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      const res = await axios.get(`${apiUrl}/${id}`);
      dispatch(fetchPostSuccess(res.data));
    } catch (error) {
      dispatch(fetchPostErr(error));
    }
  };
};
