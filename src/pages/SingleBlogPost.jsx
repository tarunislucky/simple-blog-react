import { useDispatch, useSelector } from "react-redux";
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
export default SingleBlogPost;
