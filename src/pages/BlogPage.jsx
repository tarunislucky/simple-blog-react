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
					urlSlug={post.urlSlug}
					content={post.content}
					name={post.name}
				/>
			))}
		</main>
	);
};
export default BlogPage;
