import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
const EditPage = () => {
	const { slug } = useParams();
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const post = useSelector((state) => {
		return state.posts.find((post) => post.urlSlug === slug);
	});
	const updatePostHandler = (updatedPost) => {
		dispatch({
			type: "updatePost",
			post: { ...updatedPost, id: post.id, urlSlug: post.urlSlug },
		});
		return navigate(`/blog/${post.urlSlug}`);
	};

	return <Form onFormSubmit={updatePostHandler} post={post} action="update" />;
};
export default EditPage;
