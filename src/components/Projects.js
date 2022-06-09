import React from "react";
import Astrological from "../components/assets/astrological.jpg";

const projects = () => {
	return (
		<>
			<div name='projects' className="bg-beige">
				<div className="bg-ash h-10 md:scale-95"></div>
				<div className="grid grid-cols-1 justify-items-center bg-beige">
					<div className="">
						<h1 className="text-7xl font-bebas text-center">
							Projekt
						</h1>
						<a target='_blank' rel='noreferrer' href='http://astrological-calling.herokuapp.com/'><img
							src={Astrological}
							alt=""
							className="object-contain w-96 h-auto"
						/></a>
					</div>
				</div>
			</div>
			<div className='h-24 bg-beige'></div>
		</>
	);
};

export default projects;
