import { Link, useMatches } from "@tanstack/react-router";
import { LuChevronRight } from "react-icons/lu";

export function Breadcrumbs() {
	const matches = useMatches();
	// const match = useMatch({ strict: false });
	// const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
	// const nextMatch = matches[nextMatchIndex];

	const treeRoute = matches.slice(1).map((route, index) =>
		route.id.match(/[^/]+$/) ? (
			<Link
				key={index}
				activeProps={{
					className: "font-bold",
				}}
				to={route.pathname}
				search={{}}
				params={{}}
			>
				<div className=" flex gap-2 capitalize">
					{route.id.match(/[^/]+$/)}
					<LuChevronRight size={"24px"} />
				</div>
			</Link>
		) : null
	);
	return <ul className="inline-flex gap-2 px-4 py-2">{treeRoute}</ul>;
}
