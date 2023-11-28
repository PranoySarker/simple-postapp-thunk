import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
  SEARCH_POST_FAILURE,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "../actions/postActionTypes";

// initial state
const initialState = {
  loading: false,
  error: "",
  posts: [],
  post: {},
};

// reducers
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        loading: false,
        error: action.payload,
      };
    // ============ single posts =============
    case SEARCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: [action.payload],
      };
    case SEARCH_POST_FAILURE:
      return {
        ...state,
        post: {},
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
// store
