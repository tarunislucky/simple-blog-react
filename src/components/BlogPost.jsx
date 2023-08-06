/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./BlogPost.module.css";

const BlogPost = ({ id, urlSlug, title, postContent }) => {
	const dispatch = useDispatch();

	const deletePostHandler = (e) => {
		e.preventDefault();
		dispatch({ type: "deletePost", post: { id: id } });
	};

	return (
		<Link to={urlSlug} className={styles.link}>
			<article className={styles.post}>
				<h2>{title}</h2>
				<p>{postContent}</p>
				<button onClick={deletePostHandler} className={styles.btnDelete}>
					X
				</button>
			</article>
		</Link>
	);
};
export default React.memo(BlogPost);
