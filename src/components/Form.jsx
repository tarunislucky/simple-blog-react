import { useEffect } from "react";
import { useRef } from "react";
import { Form } from "react-router-dom";
import styles from "./Form.module.css";

const PostForm = ({ post, action }) => {
	const titleRef = useRef();
	const contentRef = useRef();

	useEffect(() => {
		if (action === "patch") {
			titleRef.current.value = post.name;
			contentRef.current.value = post.content;
		}
	}, []);

	return (
		<Form method={action}>
			<div className={styles.inputGroup}>
				<label>Title</label>
				<input type="text" ref={titleRef} name="name" />
			</div>

			<div className={styles.inputGroup}>
				<label>Post Body</label>
				<textarea ref={contentRef} name="content" />
			</div>

			<button className={styles.submitPostBtn}>
				{action === "post" && "Add post"}
				{action === "patch" && "Update Post"}
			</button>
		</Form>
	);
};
export default PostForm;
