import { useEffect } from "react";
import { LuMoon, LuSunMedium } from "react-icons/lu";
import { useSetValueCallback, useValue } from "tinybase/debug/ui-react";
import { Button } from "./ui/Button";

export default function ThemeToggle() {
	const isDark = useValue("isThemeDark", "Stores");
	const handleClick = useSetValueCallback(
		"isThemeDark",
		(_, store) => !store.getValue("isThemeDark"),
		[],
		"Stores"
	);

	//for tailwind we add a class to the body tag for theming then update the local storage
	useEffect(() => {
		const root = document.documentElement;
		if (isDark) {
			root.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			root.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark]);

	return (
		<Button variant={"outline"} onClick={handleClick}>
			{isDark ? (
				<LuMoon size={23} strokeWidth={1} />
			) : (
				<LuSunMedium size={23} strokeWidth={1} />
			)}
		</Button>
	);
}
