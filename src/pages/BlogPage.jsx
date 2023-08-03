import { useSelector } from "react-redux";
import BlogPost from "../components/BlogPost";

const BlogPage = () => {
	const posts = useSelector((state) => {
		return state.posts;
	});
	return (
		<main>
			{posts.map((post) => (
				<BlogPost key={post.id} post={post} />
			))}
		</main>
	);
};
export default BlogPage;
