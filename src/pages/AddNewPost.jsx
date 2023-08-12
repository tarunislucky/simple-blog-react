import { redirect } from "react-router-dom";

import PostForm from "../components/Form";
import { createUrlSlug } from "../utility/utility";
import { API_URL } from "../utility/API_URL";

const AddNewPost = () => {
	return <PostForm action="post" />;
};

export const createPostAction = async ({ request }) => {
	const postData = await request.formData();

	const post = {
		name: postData.get("name"),
		content: postData.get("content"),
		urlSlug: createUrlSlug(postData.get("name")),
	};

	if (!post.name || !post.content) {
		alert("name or content can not be empty");
		return null;
	}

	const response = await fetch(`${API_URL}/api/v1/posts`, {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(post),
	});

	if (!response.ok) {
		throw new Error("Sending post data failed.");
	}
	const data = await response.json();
	return redirect("/blog");
};
export default AddNewPost;
