import styles from "./Navigation.module.css";
const Navigation = () => {
	return (
		<nav>
			<ul className={styles["nav-list"]}>
				<li>
					<a href="">Home</a>
				</li>
				<li>
					<a href="">Blog</a>
				</li>
				<li>
					<a href="">About</a>
				</li>
				<li>
					<a href="">Contact</a>
				</li>
			</ul>
		</nav>
	);
};
export default Navigation;
