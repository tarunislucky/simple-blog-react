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
	if (action.type === "updatePost") {
		const updatedPosts = state.posts.map(post => {
			if (post.id === action.post.id) {
				return {
					...post, title: action.post.title, postContent: action.post.postContent
				}
			}
			return post;
		})
		return {
			posts: updatedPosts
		}
	}
	return state;
}

const store = createStore(postsReducer);

export default store;

