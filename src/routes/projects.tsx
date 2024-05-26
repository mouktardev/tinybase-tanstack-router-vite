import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
	component: ProjectsComponent,
});

function ProjectsComponent() {
	return (
		<>
			<div className="border-b">
				<Breadcrumbs />
			</div>
			<Outlet />
		</>
	);
}
