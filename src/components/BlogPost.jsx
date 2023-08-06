/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./BlogPost.module.css";

const BlogPost = ({ post }) => {
	const dispatch = useDispatch();

	const deletePostHandler = (e) => {
		e.preventDefault();
		dispatch({ type: "deletePost", post: post });
	};

	return (
		<Link to={post.urlSlug} className={styles.link}>
			<article className={styles.post}>
				<h2>{post.title}</h2>
				<p>{post.postContent}</p>
				<button onClick={deletePostHandler} className={styles.btnDelete}>
					X
				</button>
			</article>
		</Link>
	);
};
export default BlogPost;
