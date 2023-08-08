import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const postsReducer = (state = { posts: [] }, action) => {

	if (action.type === "addNewPost") {
		return {
			posts: [action.post, ...state.posts]
		}
	}
	if (action.type === "deletePost") {
		return {
			posts: state.posts.filter(post => post._id !== action.post._id)
		}
	}
	if (action.type === "updatePost") {
		const updatedPosts = state.posts.map(post => {
			if (post.id === action.post.id) {
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
	return state;
}

const store = createStore(postsReducer, applyMiddleware(thunk));

// Action creators (thunks)

export const sendPostData = (post) => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch("http://localhost:3000/api/v1/posts",
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
			const response = await fetch(`http://localhost:3000/api/v1/posts/${post._id}`,
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
			const response = await fetch(`http://localhost:3000/api/v1/posts/${post._id}`,
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

export default store;

