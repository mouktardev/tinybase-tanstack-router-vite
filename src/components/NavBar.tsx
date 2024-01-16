import { Link } from "@tanstack/react-router";
import { BsTwitterX } from "react-icons/bs";
import { LuInstagram } from "react-icons/lu";
import ThemeToggle from "./ThemeToggle";
import { Avatar, AvatarFallback } from "./ui/Avatar";
import { Button } from "./ui/Button";

export const NavBar = () => {
	return (
		<aside className="sticky top-2 flex items-center gap-4 md:h-[calc(100vh-45px)] md:flex-col md:items-start">
			<div className="flex items-center gap-4 md:flex-col md:items-start md:pb-0">
				<Avatar>
					{/* <AvatarImage src="Insert your image" /> */}
					<AvatarFallback>UN</AvatarFallback>
				</Avatar>
				<p className="hidden text-lg font-semibold leading-tight md:block">
					User Name
				</p>
				<div className="flex space-y-2 md:static">
					<div className="flex gap-2">
						<Button variant={"outline"}>
							<a href="">
								<BsTwitterX size={13} />
							</a>
						</Button>
						<Button variant={"outline"}>
							<a href="">
								<LuInstagram size={13} />
							</a>
						</Button>
					</div>
				</div>
			</div>
			<Link
				to="/projects"
				className="ml-auto md:ml-0"
				inactiveProps={{ className: " font-light " }}
				activeProps={{ className: "font-bold" }}
			>
				Projects
			</Link>
			<div>
				<ThemeToggle />
			</div>
		</aside>
	);
};
