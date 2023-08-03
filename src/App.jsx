import "./App.css";
import BlogPost from "./components/BlogPost";
import Card from "./components/Card";
import Navigation from "./components/Navigation";

function App() {
	return (
		<Card>
			<Navigation></Navigation>
			<main>
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</main>
		</Card>
	);
}

export default App;
