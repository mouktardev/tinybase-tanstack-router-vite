import { createRouteMask } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";
import { Route as IndexRoute } from "./routes/index";
import { Route as ProjectsRoute } from "./routes/projects";
import { Route as ProjectsProjectRoute } from "./routes/projects.$project";
import { Route as ProjectsProjectModalRoute } from "./routes/projects.$project.modal";
import { Route as ProjectsIndexRoute } from "./routes/projects.index";

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/": {
			parentRoute: typeof rootRoute;
		};
		"/projects": {
			parentRoute: typeof rootRoute;
		};
		"/projects/": {
			parentRoute: typeof ProjectsRoute;
		};
		"/projects/$project": {
			parentRoute: typeof ProjectsRoute;
		};
		"/$project/modal": {
			parentRoute: typeof ProjectsIndexRoute;
		};
	}
}

Object.assign(IndexRoute.options, {
	path: "/",
	getParentRoute: () => rootRoute,
});

Object.assign(ProjectsRoute.options, {
	path: "/projects",
	getParentRoute: () => rootRoute,
});

Object.assign(ProjectsProjectRoute.options, {
	path: "/$project",
	getParentRoute: () => ProjectsRoute,
});

Object.assign(ProjectsIndexRoute.options, {
	path: "/",
	getParentRoute: () => ProjectsRoute,
});

Object.assign(ProjectsProjectModalRoute.options, {
	path: "/$project/modal",
	getParentRoute: () => ProjectsIndexRoute,
});

export const routeTree = rootRoute.addChildren([
	IndexRoute,
	ProjectsRoute.addChildren([
		ProjectsIndexRoute,
		ProjectsProjectRoute.addChildren([ProjectsProjectModalRoute]),
	]),
]);

export const ProjectModalToProjectMask = createRouteMask({
	routeTree,
	from: "/projects/$project/modal",
	to: "/projects/$project",
	params: true,
});
