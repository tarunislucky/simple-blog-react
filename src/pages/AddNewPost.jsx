import { useRef } from "react";
import { useDispatch } from "react-redux";

import { createUrlSlug } from "../utility/utility";
import styles from "./AddNewPost.module.css";
const AddNewPost = () => {
	const inputRef = useRef();
	const inputContentRef = useRef();
	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();

		const title = inputRef.current.value.trim();
		const content = inputContentRef.current.value.trim();

		if (!title || !content) {
			alert("Title or content is empty");
			return;
		}

		dispatch({
			type: "addNewPost",
			post: {
				id: Math.random(),
				title: title,
				urlSlug: createUrlSlug(title),
				postContent: content,
			},
		});

		// clear the inputs
		inputRef.current.value = "";
		inputContentRef.current.value = "";
	};

	return (
		<form onSubmit={onFormSubmit}>
			<div className={styles.inputGroup}>
				<label>Title</label>
				<input type="text" ref={inputRef} />
			</div>
			<div className={styles.inputGroup}>
				<label>Post Body</label>
				<textarea ref={inputContentRef} />
			</div>
			<button className={styles.addNewPostBtn}>Add Post</button>
		</form>
	);
};
export default AddNewPost;
