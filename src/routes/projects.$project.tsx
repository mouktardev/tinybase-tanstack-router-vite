import { FileRoute } from "@tanstack/react-router";
import { useCell } from "tinybase/debug/ui-react";

export const Route = new FileRoute("/projects/$project").createRoute({
	component: Project,
});

function Project() {
	const { project } = Route.useParams();
	return (
		<section className="space-y-4 px-4 py-2">
			<h1 className="text-2xl font-semibold">
				{useCell("projects", project, "title", "Stores")}
			</h1>
			<article className="border p-4">
				{useCell("projects", project, "article", "Stores")}
			</article>
		</section>
	);
}
