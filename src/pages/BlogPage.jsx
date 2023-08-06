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
		</main>
	);
};
export default BlogPage;
