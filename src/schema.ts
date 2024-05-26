import * as UiReact from "tinybase/debug/ui-react/with-schemas";

import { z } from "zod";

export const TablesSchema = {
	categories: {
		type: { type: "string" },
	},
	projects: {
		title: { type: "string" },
		excerpt: { type: "string" },
		article: { type: "string" },
		categoryId: { type: "number" },
	},
} as const;

export const ValuesSchema = {
	isThemeDark: { type: "boolean" },
} as const;

export const InitialValueData = {
	isThemeDark: localStorage.getItem("theme") === "dark",
};

export const InitialTableData = {
	categories: {
		0: { type: "app" },
		1: { type: "plugin" },
	},
	projects: {
		0: {
			title: "project-0",
			excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			article:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			categoryId: 1,
		},
		1: {
			title: "project-1",
			excerpt: "Pellentesque elit ullamcorper dignissim cras tincidunt.",
			article:
				"Pellentesque elit ullamcorper dignissim cras tincidunt. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Tincidunt augue interdum velit euismod. Velit dignissim sodales ut eu sem integer vitae justo eget. Morbi enim nunc faucibus a pellentesque sit amet. Vulputate odio ut enim blandit volutpat maecenas. Aenean sed adipiscing diam donec. Duis ut diam quam nulla porttitor massa id neque. Eget velit aliquet sagittis id consectetur. Gravida in fermentum et sollicitudin ac. A erat nam at lectus. Hendrerit gravida rutrum quisque non tellus. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Feugiat nisl pretium fusce id. Elit at imperdiet dui accumsan sit amet nulla facilisi.",
			categoryId: 0,
		},
		2: {
			title: "project-2",
			excerpt: "Consectetur libero id faucibus nisl tincidunt eget nullam non.",
			article:
				"Consectetur libero id faucibus nisl tincidunt eget nullam non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Ac turpis egestas integer eget. Egestas purus viverra accumsan in nisl nisi. Fringilla phasellus faucibus scelerisque eleifend. Tincidunt arcu non sodales neque sodales ut. Egestas quis ipsum suspendisse ultrices. Libero enim sed faucibus turpis in eu. Consectetur adipiscing elit duis tristique sollicitudin nibh. Fusce id velit ut tortor. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Magnis dis parturient montes nascetur ridiculus. Tincidunt tortor aliquam nulla facilisi. Porttitor lacus luctus accumsan tortor.",
			categoryId: 1,
		},
		4: {
			title: "application-2",
			excerpt: "Consectetur libero id faucibus nisl tincidunt eget nullam non.",
			article:
				"Consectetur libero id faucibus nisl tincidunt eget nullam non. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Ac turpis egestas integer eget. Egestas purus viverra accumsan in nisl nisi. Fringilla phasellus faucibus scelerisque eleifend. Tincidunt arcu non sodales neque sodales ut. Egestas quis ipsum suspendisse ultrices. Libero enim sed faucibus turpis in eu. Consectetur adipiscing elit duis tristique sollicitudin nibh. Fusce id velit ut tortor. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Magnis dis parturient montes nascetur ridiculus. Tincidunt tortor aliquam nulla facilisi. Porttitor lacus luctus accumsan tortor.",
			categoryId: 0,
		},
	},
};

export const ProjectsSearchSchema = z.object({
	category: z.enum(["all", "app", "plugin"]).catch("all"),
	search: z.string().catch(""),
});

export type ProjectsSearch = z.infer<typeof ProjectsSearchSchema>;

const UiReactWithSchemas = UiReact as UiReact.WithSchemas<
	[typeof TablesSchema, typeof ValuesSchema]
>;

export const {
	Provider,
	useCell,
	useCreateQueries,
	useCreateStore,
	ResultCellProps,
	ResultCellView,
	ResultRowView,
	useQueries,
	useResultCell,
	useResultRowIds,
} = UiReactWithSchemas;
