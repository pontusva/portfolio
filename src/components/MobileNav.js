import React from 'react'
import { XIcon } from "@heroicons/react/outline";

const MobileNav = ({ showMenu, active }) => {
	return (
		<>
			<div
				className={
					active
						? "md:hidden fixed flex-col flex items-center justify-center inset-0 left-1/4 uppercase z-10 bg-white/40 backdrop-blur-lg gap-8 p-8"
						: "hidden"
				}
			>
				<XIcon onClick={showMenu} className="w-5" />
				<button className='font-nunito text-lg'>Hem</button>
				<button className='font-nunito text-lg'>Om mig</button>
				<button className='font-nunito text-lg'>Kunskap</button>
				<button className='font-nunito text-lg'>Projekt</button>
			</div>
		</>
	);
};

export default MobileNav