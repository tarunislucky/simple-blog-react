import { redirect, useLoaderData } from "react-router-dom";

import { API_URL } from "../utility/API_URL";

import PostForm from "../components/Form";
const EditPage = () => {
	const post = useLoaderData();

	return <>{post && <PostForm post={post} action="patch" />}</>;
};

export const updatePostAction = async ({ request, params }) => {
	const postData = await request.formData();

	const post = {
		name: postData.get("name"),
		content: postData.get("content"),
	};

	const response = await fetch(`${API_URL}/api/v1/posts/${params.slug}`, {
		method: "PATCH",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(post),
	});

	if (!response.ok) {
		throw new Error("could not update the post");
	}

	return redirect(`/blog/${params.slug}`);
};
export default EditPage;
