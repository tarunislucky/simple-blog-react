import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../components/Form";
import { updatePostData } from "../store";
const EditPage = () => {
	const { slug } = useParams();
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const post = useSelector((state) => {
		return state.posts.find((post) => post.urlSlug === slug);
	});
	const updatePostHandler = async (updatedPost) => {
		await dispatch(updatePostData({ ...updatedPost, _id: post._id }));
		return navigate(`/blog/${post.urlSlug}`);
	};

	return <Form onFormSubmit={updatePostHandler} post={post} action="update" />;
};
export default EditPage;
