import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./BlogPost.module.css";
import { deletePostData } from "../store";

const BlogPost = ({ name, content, urlSlug }) => {
	const dispatch = useDispatch();

	const deletePostHandler = (e) => {
		e.preventDefault();
		dispatch(deletePostData({ urlSlug }));
	};

	return (
		<Link to={urlSlug} className={styles.link}>
			<article className={styles.post}>
				<h2>{name}</h2>
				<p>{content}</p>
				<button onClick={deletePostHandler} className={styles.btnDelete}>
					X
				</button>
			</article>
		</Link>
	);
};
export default React.memo(BlogPost);
