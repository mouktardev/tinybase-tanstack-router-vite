import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	beforeLoad: (p) => {
		if (p.location.pathname === "/") {
			throw redirect({ to: "/projects", })
		}
	},
});
