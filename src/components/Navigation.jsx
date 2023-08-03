import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
const Navigation = () => {
	return (
		<nav>
			<ul className={styles["nav-list"]}>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/blog"
						className={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						Blog
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/new"
						className={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						Add New Post
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive ? styles.active : undefined
						}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navigation;
