import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FileRoute, Outlet } from "@tanstack/react-router";

export const Route = new FileRoute("/projects").createRoute({
	component: ProjectsComponent,
});

function ProjectsComponent() {
	return (
		<>
			<Breadcrumbs />
			<Outlet />
		</>
	);
}
