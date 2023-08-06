import Card from "../components/Card";
import Navigation from "../components/Navigation";
const ErrorPage = () => {
	return (
		<Card>
			<Navigation />
			<h2>
				This page does not exist. Browse some other page from the naviagtion
				menu.
			</h2>
		</Card>
	);
};
export default ErrorPage;
