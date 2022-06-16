import React from "react";
import ProfilePic from "../components/assets/HomePic.jpg";
import arrow from "../components/assets/arrow.png";
import mobielArrow from "../components/assets/mobilearrow.png";
import { FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";
import ScrollAnimation from "./scroll/ScrollAnimation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
	// Chaning the text to English (*)
	const swedish = `Hej, mitt namn är Pontus Abrahamsson 
    och jag har under det senaste året, på egen hand,
    lärt mig grunderna i webbutveckling, främst
    frontend men har även erfarenhet av hur man
    hostar en hemsida på heroku och väldigt
    grundläggande kunskaper om mongoDB. Till
    hösten börjar jag läsa på IT-högskolan,
    något jag ser fram emot väldigt mycket. Jag
    brinner för programmering och är väldigt
    entusiastisk av mig. Jag själv gillar
    grupparbeten men jobbar även väldigt bra
    ensam.`;

	const englishAbout = `Hi, my name is Pontus Abrahamsson. 
    During this past year I have been studying 
    web development on my own and have gained knowledge about the core
     principles in web development. 
     My experience with hosting is somewhat limited but I know my way around heroku. 
     This fall I will be attending "IT-högskolan" in Gothenburg, 
     something I am very much looking forward to. 
     My passion is programming and i am everything enthusiast.
     I like to work in groups but am also very good working on my own.`;

	const englishButton = "Switch to English";
	const swedishButton = "Switch to Swedish";

	const [english, setEnglish] = useState(true);
	const [buttonLang, setButtonLang] = useState(true);

	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.scrollY);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);


	return (
		<>
			<div name="home" className="bg-beige">
				<div className="md:pt-44 pt-36"></div>
				<div className="flex flex-row justify-center">
					<div
						style={{
							transform: `translateY(-${offsetY * 0.3}px)`,
						}}
						className="lg:flex flex-row justify-center lg:pr-56"
					>
						<div className="h-96 md:h-auto md:w-96 flex-none bg-cover rounded-t md:rounded-t-none md:rounded-l text-center overflow-hidden hidden lg:block">
							<img
								src={ProfilePic}
								alt="Pontus Abrahamsson"
							/>
						</div>
						<img
							src={mobielArrow}
							alt="an arrow"
							className="md:hidden w-16 h-16 object-contain"
						/>
						<h1 className="text-6xl font-bebas text-center md:hidden">
							Bakgrundsfakta
						</h1>
						<div className="border-r border-b border-l border-gray-400 md:border-l-0 md:border-t-0 md:border-8 md:border-gray-900 bg-moss rounded-b md:rounded-b-none md:rounded-r p-4 flex flex-col w-full justify-between leading-normal">
							<div className="md:mb-8 flex flex-col justify-center">
								<div className="hidden md:block font-bold md:text-7xl text-3xl mb-2 font-bebas text-center">
									<h1>Bakgrundsfakta</h1>
								</div>
								<AnimatePresence>
									<motion.div className="text-black text-base lg:w-96 w-80 text-justify m-auto">
										{english ? (
											<motion.p
												initial={{
													opacity: 1,
												}}
												animate={{
													opacity: [
														0, 1,
													],
												}}
												transition={{
													duration: 1,
												}}
											>
												{swedish}
											</motion.p>
										) : (
											<motion.p
												initial={{
													opacity: 1,
												}}
												animate={{
													opacity: [
														0, 0, 1,
													],
												}}
												transition={{
													duration: 1,
												}}
											>
												{englishAbout}
											</motion.p>
										)}
									</motion.div>
								</AnimatePresence>
							</div>
							<div className="flex justify-center">
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.8 }}
									style={{
										rotate: -1,
									}}
									className="w-56 text-center justify-self-center text-gray-900 bg-ash font-bold font-nunito rounded-lg text-md px-5 py-2.5 mr-2 mb-2 "
									onClick={() => {
										setEnglish(!english);
										setButtonLang(!buttonLang);
									}}
								>
									{buttonLang
										? englishButton
										: swedishButton}
								</motion.button>
							</div>
						</div>

						<div className="flex justify-center pt-16 pb-16">
							<img
								src={ProfilePic}
								alt="Pontus Abrahamsson"
								className="lg:hidden object-contain lg:w-96 w-72 rounded-xl "
							/>
						</div>
					</div>
				</div>

				<div className="md:h-40"></div>
				<div className="bg-ash backdrop-blur-lg flex flex-row justify-center space-x-10 h-14 items-center w-full md:scale-95">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/pontusva"
					>
						<FaGithub className="w-10 h-10 z-10 cursor-pointer" />{" "}
					</a>

					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.instagram.com/pontwah/"
					>
						<FaInstagram className="w-10 h-10" />
					</a>

					<FaTwitter className="w-10 h-10" />
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.twitch.tv/1nexion"
					>
						<FaTwitch className="w-10 h-10" />
					</a>
					<img
						src={arrow}
						alt="arrow"
						className="w-36 h-36 pb-12 hidden md:block"
					/>
				</div>
				<ScrollAnimation />
			</div>
		</>
	);
};

export default Home;
