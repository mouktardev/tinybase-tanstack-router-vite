import { z } from "zod";

export const ThemeSchema = { isThemeDark: { type: "boolean" } } as const;

export const ProjectsSearchSchema = z.object({
	category: z.enum(["all", "app", "plugin"]).catch("all"),
	search: z.string().catch(""),
});
export type ProjectsSearch = z.infer<typeof ProjectsSearchSchema>;
