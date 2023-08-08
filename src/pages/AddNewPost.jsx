import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import { sendPostData } from "../store";
import { createUrlSlug } from "../utility/utility";

const AddNewPost = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const createPostHandler = (newPostData) => {
		const post = {
			name: newPostData.name,
			content: newPostData.content,
			urlSlug: createUrlSlug(newPostData.name),
		};

		dispatch(sendPostData(post));

		return navigate("/blog");
	};

	return <Form onFormSubmit={createPostHandler} action="create" />;
};
export default AddNewPost;
