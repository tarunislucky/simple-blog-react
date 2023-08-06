/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styles from "./BlogPost.module.css";

const BlogPost = ({ post }) => {
	return (
		<Link to={post.urlSlug} className={styles.link}>
			<article className={styles.post}>
				<h2>{post.title}</h2>
				<p>{post.postContent}</p>
			</article>
		</Link>
	);
};
export default BlogPost;
