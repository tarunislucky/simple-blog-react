import styles from "./Card.module.css";
/* eslint-disable react/prop-types */
const Card = (props) => {
	return <div className={styles.container}>{props.children}</div>;
};
export default Card;
