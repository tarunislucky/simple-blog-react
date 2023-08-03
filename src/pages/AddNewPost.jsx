import { useRef } from "react";
import { useDispatch } from "react-redux";
import styles from "./AddNewPost.module.css";
const AddNewPost = () => {
	const inputRef = useRef();
	const inputContentRef = useRef();
	const dispatch = useDispatch();

	const onFormSubmit = (event) => {
		event.preventDefault();

		dispatch({
			type: "addNewPost",
			post: {
				id: Math.random(),
				title: inputRef.current.value,
				postContent: inputContentRef.current.value,
			},
		});
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
