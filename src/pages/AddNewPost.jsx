import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Form from "../components/Form";
import { createUrlSlug } from "../utility/utility";

const AddNewPost = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const createPostHandler = (newPostData) => {
		dispatch({
			type: "addNewPost",
			post: {
				id: Math.random(),
				title: newPostData.title,
				urlSlug: createUrlSlug(newPostData.title),
				postContent: newPostData.postContent,
			},
		});

		return navigate("/blog");
	};

	return <Form onFormSubmit={createPostHandler} action="create" />;
};
export default AddNewPost;
