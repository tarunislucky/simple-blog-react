import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
	const fetchedPosts = useLoaderData();
	const [posts, setPosts] = useState(fetchedPosts);

	console.log("BlogPage");

	return (
		<main>
			{posts.map((post) => (
				<BlogPost
					key={post._id}
					urlSlug={post.urlSlug}
					content={post.content}
					name={post.name}
				/>
			))}
		</main>
	);
};
export const blogLoader = async () => {
	const API_URL = import.meta.env.VITE_API_URL;

	const sendRequest = async () => {
		const response = await fetch(`${API_URL}/api/v1/posts`, { method: "GET" });

		if (!response.ok) {
			throw new Error("no posts found");
		}
		return response;
	};
	try {
		const response = await sendRequest();
		const data = await response.json();
		return data.data.posts;
	} catch (err) {
		console.log(err);
	}
};
export default BlogPage;
