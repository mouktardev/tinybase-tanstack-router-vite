import { NavBar } from "@/components/NavBar";
import { InitialTableData, InitialValueData, ProjectsSearchSchema, Provider, TablesSchema, ValuesSchema, useCreateQueries, useCreateStore } from "@/schema";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { StoreInspector } from "tinybase/debug/ui-react-dom";
import { createQueries, createStore } from "tinybase/debug/with-schemas";

export const Route = createRootRoute({
	component: RootComponent,
	validateSearch: ProjectsSearchSchema,
});

function RootComponent() {
	const store = useCreateStore(() =>
		createStore().setTablesSchema(TablesSchema).setTables(InitialTableData)
			.setValuesSchema(ValuesSchema)
			.setValues(InitialValueData)
	);
	const queries = useCreateQueries(store, createQueries);
	return (
		<Provider store={store} queries={queries}>
			<div className="w-full overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-thumb-rounded md:h-[100vh] dark:scrollbar-thumb-zinc-700">
				<main className="container mx-auto max-w-[900px] gap-4 space-y-6 p-5 md:flex md:space-y-0">
					<NavBar />
					<section className="w-full flex-1 rounded-md border">
						<Outlet />
					</section>
				</main>
			</div>
			<StoreInspector />
		</Provider>
	);
}
