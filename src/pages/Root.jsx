import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import Navigation from "../components/Navigation";

const Root = () => {
	return (
		<Card>
			<Navigation />
			<Outlet />
		</Card>
	);
};
export default Root;
