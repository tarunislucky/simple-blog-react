import { useState } from "react";
import styles from "./Form.module.css";
const Form = ({ onFormSubmit, post }) => {
	const [title, setTitle] = useState(post.title);
	const [content, setContent] = useState(post.postContent);

	const formHandler = (e) => {
		e.preventDefault();
		onFormSubmit({
			id: post.id,
			urlSlug: post.urlSlug,
			title: title,
			postContent: content,
		});
	};

	const setPostTitle = (e) => {
		setTitle(e.target.value);
	};

	const setPostContent = (e) => {
		setContent(e.target.value);
	};

	return (
		<form onSubmit={formHandler}>
			<div className={styles.inputGroup}>
				<label>Title</label>
				<input type="text" onChange={setPostTitle} value={title} />
			</div>
			<div className={styles.inputGroup}>
				<label>Post Body</label>
				<textarea onChange={setPostContent} value={content} />
			</div>
			<button className={styles.addNewPostBtn}>Update Post</button>
		</form>
	);
};
export default Form;
