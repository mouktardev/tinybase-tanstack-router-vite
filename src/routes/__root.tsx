import { NavBar } from "@/components/NavBar";
import { Loading } from "@/components/ui/Loading";
import { ThemeSchema } from "@/schema";
import { Outlet, RootRoute, useRouterState } from "@tanstack/react-router";
import { createQueries, createStore } from "tinybase/debug";
import {
	Provider,
	useCreateQueries,
	useCreateStore,
} from "tinybase/debug/ui-react";
import { StoreInspector } from "tinybase/debug/ui-react-dom";

const CATEGORIES = {
	0: { type: "app" },
	1: { type: "plugin" },
};
const MOCK_DATA = {
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
};

export const Route = new RootRoute({
	component: RootComponent,
});

function RootComponent() {
	const Stores = useCreateStore(() =>
		createStore()
			.setTable("projects", MOCK_DATA)
			.setTable("categories", CATEGORIES)
			.setValuesSchema(ThemeSchema)
			.setValue("isThemeDark", localStorage.getItem("theme") === "dark")
	);
	const Queries = useCreateQueries(Stores, createQueries);

	const status = useRouterState({ select: (s) => s.status });

	return (
		<Provider storesById={{ Stores }} queriesById={{ Queries }}>
			<div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-thumb-rounded md:h-[100vh] dark:scrollbar-thumb-zinc-700">
				<main className="container mx-auto max-w-[900px] gap-4 space-y-6 p-5 md:flex md:space-y-0">
					<NavBar />
					<section className="w-full flex-1 rounded-md border">
						<Outlet />
						{status === "pending" ? (
							<div className="flex w-full items-center justify-center">
								<Loading />
							</div>
						) : null}
					</section>
				</main>
			</div>
			<StoreInspector />
		</Provider>
	);
}
