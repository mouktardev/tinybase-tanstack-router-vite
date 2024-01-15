import { FileRoute, redirect } from "@tanstack/react-router";

export const Route = new FileRoute("/").createRoute({
	beforeLoad: (p) => {
		if (p.location.pathname === "/") {
			throw redirect({
				to: "/projects",
			});
		}
	},
});
