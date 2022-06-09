import React from "react";
import { useState, useEffect } from "react";
import { MenuIcon } from "@heroicons/react/outline";
import { motion } from 'framer-motion';
import {Link} from 'react-scroll';
import MobileNav from "./MobileNav";



const Navbar = () => {
	// For toggling navbar*
	const [active, setActive] = useState(false);

	// for making the nav dissapear when scrolling**
	const [shouldShowAction, setShouldShowAction] = useState(true);
	const [lastYPos, setLastYPos] = useState(0);

	// *
	const showMenu = () => {
		setActive(!active);
	};

	// **
	useEffect(() => {

		function handleScroll() {
			const yPos = window.scrollY;
			const isScrollingUp = yPos < lastYPos;

			setShouldShowAction(isScrollingUp);
			setLastYPos(yPos);
		}

		window.addEventListener('scroll', handleScroll, false);

		return () => {
			window.removeEventListener('scroll', handleScroll, false);
		}
	}, [lastYPos])

	

	return (
		<>
			<motion.div 
			animate={{ opacity: shouldShowAction ? 1 : 0 }}
			className="fixed w-full lg:h-20 h-32 flex justify-between text-black items-center bg-beige z-10 border-b-2 border-black">
				<div className="flex flex-row md:items-start md:justify-start w-full md:pl-80 justify-center">
					<h1 className="text-2xl font-nunito uppercase tracking-wide underline">
						Abrahamsson
					</h1>
				</div>

				<nav>
					<div className="absolute right-6 lg:hidden top-6 ">
						<MenuIcon
							className="w-5 scale-150 cursor-pointer"
							onClick={showMenu}
						/>
					</div>
					<div className="hidden lg:flex gap-8 p-6 uppercase md:pr-80 text-lg font-bold ">
						<button><Link to='home' smooth={true}  duration={500}>Hem</Link></button>
						<button><Link to='skills' smooth={true}  duration={500}>Kunskap</Link></button>
						<button><Link to='projects' smooth={true}  duration={500}>Projekt</Link></button>
					</div>
					<MobileNav showMenu={showMenu} active={active} />
				</nav>
			</motion.div>
		</>
	);
};

export default Navbar;
