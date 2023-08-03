/* eslint-disable react/prop-types */
import styles from "./BlogPost.module.css";

const BlogPost = ({ post }) => {
	return (
		<article className={styles.post}>
			<h2>{post.title}</h2>
			<p>{post.postContent}</p>
		</article>
	);
};
export default BlogPost;
