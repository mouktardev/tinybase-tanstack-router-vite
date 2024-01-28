import { ProjectsSearch } from "@/schema";
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { LuSearchX } from "react-icons/lu";
import {
	ResultCellProps,
	ResultCellView,
	ResultRowView,
	useQueries,
	useResultCell,
	useResultRowIds,
} from "tinybase/debug/ui-react";

export const QueryView = (props: ProjectsSearch & { value: string }) => {
	const queriesReference = useQueries("Queries");
	useMemo(
		() =>
			queriesReference?.setQueryDefinition(
				"ViewQuery", //queryId
				"projects", //tableId
				({ select, having, join }) => {
					//columns add
					select((_, rowId) => rowId).as("projectId");

					select("title");
					select("excerpt");

					select("categories", "type");
					join("categories", "categoryId");
					props.category !== "all" &&
						having((getCell) => getCell("type") === props.category);

					having(
						(getCell) =>
							(getCell("title") as string | number | boolean)
								?.toString()
								.toLowerCase()
								.includes(props.value.toLowerCase())
					);
				}
			),
		[queriesReference, props.category, props.value]
	);

	const queryTableRowIds = useResultRowIds("ViewQuery", queriesReference);

	return (
		<div className="flex flex-wrap gap-4">
			{queryTableRowIds.length != 0 ? (
				queryTableRowIds.map((rowId, index) => (
					<div
						className="w-full space-y-2 rounded-md border p-4 md:w-[200px]"
						key={index}
					>
						<ResultRowView
							queryId="ViewQuery"
							rowId={rowId}
							queries={queriesReference}
							resultCellComponent={CustomResultCell}
							getResultCellComponentProps={() => ({
								category: props.category,
								search: props.search,
							})}
						/>
					</div>
				))
			) : (
				<div className="flex h-64 w-full items-center justify-center gap-4 border">
					<LuSearchX size={24} />
					<p>Search not found</p>
				</div>
			)}
		</div>
	);
};

const CustomResultCell = (props: ResultCellProps & Partial<ProjectsSearch>) => {
	const projectId = useResultCell(
		props.queryId,
		props.rowId,
		"projectId",
		props.queries
	);
	return props.cellId === "title" ? (
		<Link
			to="/projects/$project/modal"
			className="text-lg font-bold capitalize text-blue-400"
			params={{
				project: projectId as string,
			}}
			search={{
				category: props.category as ProjectsSearch["category"],
				search: props.search as ProjectsSearch["search"],
			}}
		>
			<ResultCellView {...props} />
		</Link>
	) : props.cellId === "excerpt" ? (
		<div>
			<ResultCellView {...props} />
		</div>
	) : props.cellId === "type" ? (
		<p className="inline-block rounded-full border px-2 py-1 text-sm font-bold opacity-50">
			<ResultCellView {...props} />
		</p>
	) : null;
};
