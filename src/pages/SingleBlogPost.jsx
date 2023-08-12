import { useLoaderData, useNavigate } from "react-router-dom";

import styles from "./SingleBlogPost.module.css";
import { API_URL } from "../utility/API_URL";

const SingleBlogPost = () => {
	const post = useLoaderData();
	const navigate = useNavigate();

	const editBtnhandler = () => {
		return navigate("edit");
	};

	return (
		<>
			{post && (
				<article>
					<h2 className={styles.postTitle}>{post.name}</h2>
					<button onClick={editBtnhandler} className={styles.editBtn}>
						Edit
					</button>
					<p>{post.content}</p>
				</article>
			)}
		</>
	);
};

export const singlePostLoader = async ({ params }) => {
	const response = await fetch(`${API_URL}/api/v1/posts/${params.slug}`, {
		method: "GET",
	});
	if (!response.ok) {
		throw new Error("could not get the post");
	}
	const data = await response.json();
	return data.data.post;
};
export default SingleBlogPost;
