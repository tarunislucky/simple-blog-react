import { createStore } from "redux";


const postsReducer = (state = { posts: [] }, action) => {

	if (action.type === "addNewPost") {
		return {
			posts: [action.post, ...state.posts]
		}
	}
	if (action.type === "deletePost") {
		return {
			posts: state.posts.filter(post => post.id !== action.post.id)
		}
	}

	return state;
}

const store = createStore(postsReducer);

export default store;

