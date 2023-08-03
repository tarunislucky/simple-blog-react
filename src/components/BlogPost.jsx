import styles from "./BlogPost.module.css";

const BlogPost = () => {
	return (
		<article className={styles.post}>
			<h2>Blog post heading</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
				necessitatibus ipsum maxime expedita assumenda, hic consequuntur minus
				suscipit dolore a aliquid cum rem. Asperiores et accusantium, officia
				hic fuga cupiditate.
			</p>
		</article>
	);
};
export default BlogPost;
