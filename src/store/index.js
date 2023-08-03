import { createStore } from "redux";


const postsReducer = (state = { posts: [] }, action) => {

	if (action.type === "addNewPost") {
		return {
			posts: [action.post, ...state.posts]
		}
	}
}

const store = createStore(postsReducer);

export default store;

