import { QueryView } from "@/components/QueryView";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { CgFormatSlash } from "react-icons/cg";
import { LuSearch } from "react-icons/lu";
import { useDebounce } from "use-debounce";

export const Route = createFileRoute("/projects/")({
    component: ProjectsIndex,
});

function ProjectsIndex() {
    const navigate = useNavigate({ from: Route.fullPath });
    const { category, search } = Route.useSearch();
    const [value] = useDebounce(search, 500);
    const inputRef = useRef<HTMLInputElement>(null);

    // this is for `/` shortcut search command
    useEffect(() => {
        const open = (e: KeyboardEvent) => {
            if (e.key === "/") {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        const close = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                inputRef.current?.blur();
            }
        };
        window.addEventListener("keydown", close);
        window.addEventListener("keydown", open);
        return () => {
            window.removeEventListener("keydown", close);
            window.removeEventListener("keydown", open);
        };
    }, []);

    return (
        <div className="space-y-5 p-4">
            <div className="flex items-center gap-4">
                <Button
                    className="rounded-full border px-3 py-1 font-semibold aria-checked:bg-blue-400 aria-checked:text-white dark:text-neutral-300 dark:aria-checked:bg-neutral-700"
                    aria-checked={category === "all"}
                    onClick={() =>
                        navigate({
                            search: (prev) => ({
                                ...prev,
                                category: "all",
                            }),
                        })
                    }
                >
                    all
                </Button>
                <Button
                    className="rounded-full border px-3 py-1 font-semibold aria-checked:bg-blue-400 aria-checked:text-white dark:text-neutral-300 dark:aria-checked:bg-neutral-700"
                    aria-checked={category === "app"}
                    onClick={() =>
                        navigate({
                            search: (prev) => ({
                                ...prev,
                                category: "app"
                            }),
                        })
                    }
                >
                    application
                </Button>
                <Button
                    className="rounded-full border px-3 py-1 font-semibold aria-checked:bg-blue-400 aria-checked:text-white dark:text-neutral-300 dark:aria-checked:bg-neutral-700"
                    aria-checked={category === "plugin"}
                    onClick={() =>
                        navigate({
                            search: (prev) => ({
                                ...prev,
                                category: "plugin",
                            }),
                        })
                    }
                >
                    plugin
                </Button>
            </div>
            <div className="relative">
                <Input
                    ref={inputRef}
                    id="Search"
                    name="search"
                    type="text"
                    className="px-10 placeholder:text-gray-800/30 dark:placeholder:text-gray-200/30"
                    placeholder="Search by title"
                    onChange={(event) => {
                        navigate({
                            search: (prev) => ({
                                ...prev,
                                search: event.target.value,
                            }),
                        });
                    }}
                />
                <LuSearch className="absolute inset-y-2 mx-2" size={20} />
                <CgFormatSlash
                    className="absolute inset-y-2 right-0 mx-2 rounded-md bg-popover-foreground/30 text-muted"
                    size={20}
                />
            </div>
            <QueryView value={value} category={category} search={search} />
        </div>
    );
}
