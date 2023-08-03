import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./pages/Root";
import BlogPage from "./pages/BlogPage";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddNewPost from "./pages/AddNewPost";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "",
					element: <Homepage />,
				},
				{
					path: "blog",
					element: <BlogPage />,
				},
				{
					path: "/new",
					element: <AddNewPost />,
				},
				{
					path: "about",
					element: <About />,
				},
				{
					path: "contact",
					element: <Contact />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
