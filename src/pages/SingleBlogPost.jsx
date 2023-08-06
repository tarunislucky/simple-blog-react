import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleBlogPost = () => {
	const { id } = useParams();
	const post = useSelector((state) => {
		return state.posts.find((post) => post.urlSlug === id);
	});

	return (
		<article>
			<h2>{post.title}</h2>
			<p>{post.postContent}</p>
		</article>
	);
};
export default SingleBlogPost;
