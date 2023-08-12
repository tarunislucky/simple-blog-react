import { useRouteError } from "react-router-dom";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
const ErrorPage = () => {
	const error = useRouteError();
	return (
		<Card>
			<Navigation />
			<h2>{error.message}</h2>
		</Card>
	);
};
export default ErrorPage;
