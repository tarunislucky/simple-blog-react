import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogPost.module.css";

const BlogPost = ({ name, content, urlSlug, onDelete }) => {
	const deletePosthandler = (e) => {
		e.preventDefault();
		onDelete(urlSlug);
	};
	return (
		<Link to={urlSlug} className={styles.link}>
			<article className={styles.post}>
				<h2>{name}</h2>
				<p>{content}</p>
				<button onClick={deletePosthandler} className={styles.btnDelete}>
					X
				</button>
			</article>
		</Link>
	);
};
export default React.memo(BlogPost);
