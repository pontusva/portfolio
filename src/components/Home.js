import React from "react";
import ProfilePic from "../components/assets/HomePic.jpg";
import { FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Home = () => {
	return (
		<>
			<div className="bg-slate-200">
				<div className="md:flex md:flex-row md:justify-center md:space-x-24 md:pt-24 grid grid-cols-1 justify-items-center  w-74  h-full">
					<img
						src={ProfilePic}
						alt="Pontus Abrahamsson"
						className="h-96 rounded-xl object-contain"
					/>
					<p className="text-justify md:w-96 font-nunito">
						Hej, mitt namn är Pontus Abrahamsson och jag är en
						webbutvecklare med cirka ett års kunskap som jag
						hämtat in på egen hand via nätet. Jag sysslar
						främst med frontend och har då React som fokus.
						Jobbar hela vägen från grunden med webbsidor och
						använder just nu verktyg som React, TailwindCSS,
						Framer Motion och Inkscape. Som person gillar jag
						att testa nya saker, teknologier och självklart
						programmera. På fritiden spelar jag Magic: The
						Gathering, pratar med vänner {"(och programmerar...)"} Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Eligendi qui amet dicta nesciunt
						voluptas, explicabo, aliquam similique dolore
						distinctio dolores quam? Eligendi doloremque sunt
						voluptas iste veniam modi aut, itaque omnis magnam
						et, dicta dignissimos?
					</p>
				</div>
				<div className="h-48"></div>
				<div className="bg-blue-500/40 backdrop-blur-lg flex flex-row justify-center space-x-10 h-14 items-center">
					<FaGithub className="w-10 h-10" />
					<FaInstagram className="w-10 h-10" />
					<FaTwitter className="w-10 h-10" />
					<FaTwitch className="w-10 h-10" />
				</div>
			</div>
		</>
	);
};

export default Home;
