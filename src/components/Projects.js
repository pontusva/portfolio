import React from "react";
import Astrological from "../components/assets/astrological.jpg";

const projects = () => {
	return (
		<>
			<div className="bg-blue-500/40 h-10"></div>
			<div class="grid grid-cols-3 gap-4">
				<div class="w-full bg-red-400 h-24">
					<img
						src={Astrological}
						alt=""
						className="object-fit"
					/>
				</div>
			</div>
		</>
	);
};

export default projects;
