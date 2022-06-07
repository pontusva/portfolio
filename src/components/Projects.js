import React from "react";
import Astrological from "../components/assets/astrological.jpg";

const projects = () => {
	return (
		<>
			<div className="bg-beige">
				<div className="bg-ash h-10 md:scale-95"></div>
				<div class="grid grid-cols-1 justify-items-center bg-beige">
					<div class="">
						<h1 className="text-7xl font-bebas text-center">
							Projekt
						</h1>
						<img
							src={Astrological}
							alt=""
							className="object-contain w-96 h-auto"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default projects;
