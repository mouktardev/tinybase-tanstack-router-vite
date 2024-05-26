import { useCell } from "@/schema";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/$project")({
	component: Project,
});

function Project() {
	const { project } = Route.useParams();
	return (
		<section className="space-y-4 p-4">
			<h1 className="text-2xl font-semibold capitalize text-blue-400">
				{useCell("projects", project, "title")}
			</h1>
			<article className="rounded-md border p-4">
				{useCell("projects", project, "article")}
			</article>
		</section>
	);
}
