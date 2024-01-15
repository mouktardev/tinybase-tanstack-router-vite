import { Router, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { ProjectModalToProjectMask, routeTree } from "./routeTree.gen";
import "./styles.css";

// Set up a Router instance
const router = new Router({
	routeTree,
	routeMasks: [ProjectModalToProjectMask],
	// defaultPreload: "intent",
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(<RouterProvider router={router} />);
}
