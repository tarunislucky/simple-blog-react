import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const API_URL = import.meta.env.VITE_API_URL;

const postsReducer = (state = { posts: [] }, action) => {

	if (action.type === "addNewPost") {
		return {
			posts: [action.post, ...state.posts]
		}
	}
	if (action.type === "deletePost") {
		return {
			posts: state.posts.filter(post => post.urlSlug !== action.post.urlSlug)
		}
	}
	if (action.type === "updatePost") {
		const updatedPosts = state.posts.map(post => {
			if (post._id === action.post._id) {
				return {
					...post, name: action.post.name, content: action.post.content
				}
			}
			return post;
		})
		return {
			posts: updatedPosts
		}
	}
	if (action.type === "setState") {
		return {
			posts: action.posts
		};
	}
	return state;
}

const store = createStore(postsReducer, applyMiddleware(thunk));

// Action creators (thunks)

export const sendPostData = (post) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(`${API_URL}/api/v1/posts`,
				{
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(post)
				}
			);
			if (!response.ok) {
				throw new Error("Sending post data failed.");
			}
			return response;
		}

		try {
			const response = await sendRequest();
			const data = await response.json();

			dispatch({
				type: "addNewPost",
				post: data.data.post,
			})
		} catch (err) {
			console.log(err);
		}
	}
}

export const updatePostData = (post) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(`${API_URL}/api/v1/posts/${post.urlSlug}`,
				{
					method: "PATCH",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(post)
				}
			);

			if (!response.ok) {
				throw new Error("Updating post data failed.");
			}
			return response;
		}

		try {
			const response = await sendRequest();
			const data = await response.json();

			dispatch({
				type: "updatePost",
				post: data.data.post,
			})
		} catch (err) {
			console.log(err);
		}
	}
}

export const deletePostData = (post) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(`${API_URL}/api/v1/posts/${post.urlSlug}`,
				{ method: "DELETE" });

			if (!response.ok) {
				throw new Error("Deleting post failed.");
			}
			return response;
		}

		try {
			const response = await sendRequest();

			dispatch({ type: "deletePost", post });
		} catch (err) {
			console.log(err);
		}
	}
}

export const fetchPostsData = () => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(`${API_URL}/api/v1/posts`, { method: "GET" })

			if (!response.ok) {
				throw new Error("no posts found");
			}
			return response;
		}
		try {
			const response = await sendRequest();
			const data = await response.json();

			dispatch({
				type: "setState",
				posts: data.data.posts
			})
		} catch (err) {
			console.log(err);
		}
	}
}

export default store;

