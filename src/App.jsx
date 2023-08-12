import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Root from "./pages/Root";
import BlogPage, { blogLoader } from "./pages/BlogPage";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddNewPost, { createPostAction } from "./pages/AddNewPost";
import ErrorPage from "./pages/ErrorPage";
import SingleBlogPost, { singlePostLoader } from "./pages/SingleBlogPost";
import EditPage, { updatePostAction } from "./pages/EditPage";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "",
					element: <Homepage />,
				},
				{
					path: "blog",
					element: <BlogPage />,
					loader: blogLoader,
				},
				{
					path: "blog/:slug",
					element: <SingleBlogPost />,
					loader: singlePostLoader,
				},
				{
					path: "blog/:slug/edit",
					element: <EditPage />,
					loader: singlePostLoader,
					action: updatePostAction,
				},
				{
					path: "/new",
					element: <AddNewPost />,
					action: createPostAction,
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
