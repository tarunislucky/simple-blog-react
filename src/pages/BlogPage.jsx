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
					key={post.id}
					id={post.id}
					urlSlug={post.urlSlug}
					postContent={post.postContent}
					title={post.title}
				/>
			))}
			{posts.length === 0 && <h2>There are no posts!</h2>}
		</main>
	);
};
export default BlogPage;
