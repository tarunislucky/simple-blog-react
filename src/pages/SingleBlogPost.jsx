import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./SingleBlogPost.module.css";

const SingleBlogPost = () => {
	const navigate = useNavigate();
	const { slug } = useParams();
	const post = useSelector((state) => {
		return state.posts.find((post) => post.urlSlug === slug);
	});

	const editBtnhandler = () => {
		return navigate("edit");
	};
	return (
		<article>
			<h2 className={styles.postTitle}>{post.title}</h2>
			<button onClick={editBtnhandler} className={styles.editBtn}>
				Edit
			</button>
			<p>{post.postContent}</p>
		</article>
	);
};
export default SingleBlogPost;
