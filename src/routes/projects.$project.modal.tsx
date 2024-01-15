import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogTitle,
} from "@/components/ui/Dialog";
import { FileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCell } from "tinybase/debug/ui-react";

export const Route = new FileRoute("/$project/modal").createRoute({
	component: ProjectModalComponent,
});

function ProjectModalComponent() {
	const { project } = Route.useParams();
	const { category, search } = Route.useSearch();
	const navigate = useNavigate();

	return (
		<Dialog
			open
			onOpenChange={(open) => {
				if (!open) {
					navigate({
						to: "/projects",
						search: { category, search },
					});
				}
			}}
		>
			<DialogContent>
				<DialogTitle className="text-blue-400">
					{useCell("projects", project, "title", "Stores")}
				</DialogTitle>
				<DialogDescription>
					{useCell("projects", project, "article", "Stores")}
				</DialogDescription>
				<DialogFooter>
					<Link
						search={{}}
						params={{}}
						target="_blank"
						className="text-blue-400 underline"
					>
						Open in new tab (to test de-masking)
					</Link>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
