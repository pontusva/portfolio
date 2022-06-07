import React from "react";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import MobileNav from "./MobileNav";

const Navbar = () => {
	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<>
			<div className="relative w-full h-32 flex justify-between text-black items-center bg-beige">
				<div className="flex flex-row md:items-start md:justify-start w-full md:pl-80 justify-center">
					<h1 className="text-2xl font-nunito uppercase tracking-wide underline">
						Abrahamsson
					</h1>
				</div>

				<nav>
					<div className="absolute right-6 md:hidden top-6 ">
						<MenuIcon
							className="w-5 scale-150 cursor-pointer"
							onClick={showMenu}
						/>
					</div>
					<div className="hidden md:flex gap-8 p-6 uppercase md:pr-80 text-lg font-bold ">
						<button>Hem</button>
						<button>Om</button>
						<button>Kunskap</button>
						<button>Projekt</button>
					</div>
					<MobileNav showMenu={showMenu} active={active} />
				</nav>
			</div>
		</>
	);
};

export default Navbar;
