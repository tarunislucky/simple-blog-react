import { useSelector } from "react-redux";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
	const posts = useSelector((state) => {
		return state.posts;
	});

	return (
		<main>
			{posts.map((post) => (
				<BlogPost
					key={post._id}
					_id={post._id}
					urlSlug={post.urlSlug}
					content={post.content}
					name={post.name}
				/>
			))}
			{posts.length === 0 && <h2>There are no posts!</h2>}
		</main>
	);
};
export default BlogPage;
