import { useState, useCallback } from "react";
import { useLoaderData } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { API_URL } from "../utility/API_URL";

const BlogPage = () => {
	const fetchedPosts = useLoaderData();
	const [posts, setPosts] = useState(fetchedPosts);

	const deletePostHandler = useCallback(async (slug) => {
		const response = await fetch(`${API_URL}/api/v1/posts/${slug}`, {
			method: "DELETE",
		});

		if (response.ok) {
			setPosts((prevState) => {
				return prevState.filter((post) => post.urlSlug !== slug);
			});
		}
	}, []);

	return (
		<main>
			{posts.map((post) => (
				<BlogPost
					key={post._id}
					urlSlug={post.urlSlug}
					content={post.content}
					name={post.name}
					onDelete={deletePostHandler}
				/>
			))}
		</main>
	);
};
export const blogLoader = async () => {
	const sendRequest = async () => {
		const response = await fetch(`${API_URL}/api/v1/posts`, { method: "GET" });

		if (!response.ok) {
			throw new Error("no posts found");
		}
		return response;
	};

	const response = await sendRequest();
	const data = await response.json();
	return data.data.posts;
};

export default BlogPage;
