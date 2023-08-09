import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogPost from "../components/BlogPost";
import { fetchPostsData } from "../store";

let isInitial = true;
const BlogPage = () => {
	const dispatch = useDispatch();

	const posts = useSelector((state) => {
		return state.posts;
	});

	useEffect(() => {
		if (isInitial) {
			dispatch(fetchPostsData());
			isInitial = false;
		}
	}, []);

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
		</main>
	);
};
export default BlogPage;
