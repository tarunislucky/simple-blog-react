import { useEffect } from "react";
import { useRef } from "react";
import styles from "./Form.module.css";

const Form = ({ onFormSubmit, post, action }) => {
	const titleRef = useRef();
	const contentRef = useRef();

	const formHandler = (e) => {
		e.preventDefault();

		if (!titleRef.current.value.trim() || !contentRef.current.value.trim()) {
			alert("title or content cannot be empty !");
			return;
		}

		onFormSubmit({
			name: titleRef.current.value,
			content: contentRef.current.value,
		});
	};

	useEffect(() => {
		if (action === "update") {
			titleRef.current.value = post.name;
			contentRef.current.value = post.content;
		}
	}, []);

	return (
		<form onSubmit={formHandler}>
			<div className={styles.inputGroup}>
				<label>Title</label>
				<input type="text" ref={titleRef} />
			</div>

			<div className={styles.inputGroup}>
				<label>Post Body</label>
				<textarea ref={contentRef} />
			</div>

			<button className={styles.submitPostBtn}>
				{action === "create" && "Add post"}
				{action === "update" && "Update Post"}
			</button>
		</form>
	);
};
export default Form;
