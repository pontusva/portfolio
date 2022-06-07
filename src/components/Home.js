import React from "react";
import ProfilePic from "../components/assets/HomePic.jpg";
import arrow from "../components/assets/arrow.png";
import mobielArrow from "../components/assets/mobilearrow.png";
import { FaGithub, FaInstagram, FaTwitter, FaTwitch } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className='bg-beige'>
                <div className='md:pt-24'></div>
                <div className='flex flex-row justify-center'>
                    <div className='lg:flex flex-row justify-center'>
                        <div className='h-96 lg:h-auto lg:w-96 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hidden md:block'>
                            <img src={ProfilePic} alt='Pontus Abrahamsson' />
                        </div>
						<img src={mobielArrow} alt="an arrow" className='md:hidden w-16 h-16 object-contain' />
						<h1 className='text-6xl font-bebas text-center md:hidden'>Bakgrundsfakta</h1>
                        <div className='border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t-0 lg:border-8 lg:border-gray-900 bg-moss rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
                            <div className='md:mb-8'>
                                <div className='hidden md:block font-bold md:text-7xl text-3xl mb-2 font-bebas text-center'>
                                    <h1>Bakgrundsfakta</h1>
                                </div>
                                <p className='text-black text-base md:w-96 w-86 text-justify'>
                                    Hej, mitt namn är Pontus Abrahamsson och jag
                                    har under det senaste året, på egen hand,
                                    lärt mig grunderna i webbutveckling, främst
                                    frontend men har även erfarenhet av hur man
                                    hostar en hemsida på heroku och väldigt
                                    grundläggande kunskaper om mongoDB. Till
                                    hösten börjar jag läsa på IT-högskolan,
                                    något jag ser fram emot väldigt mycket. Jag
                                    brinner för programmering och är väldigt
                                    entusiastisk av mig. Jag själv gillar
                                    grupparbeten men jobbar även väldigt bra
                                    ensam. Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit. Velit ad,
                                    exercitationem veritatis sint facere est
                                    nisi placeat pariatur odio itaque,
                                    praesentium modi ut. Dicta aliquam dolorum
                                    hic numquam non vero, expedita ipsam nisi
                                    tempora doloremque similique?
                                </p>
                            </div>
                        </div>
						<img src={ProfilePic} alt='Pontus Abrahamsson' className='md:hidden object-contain' />
                    </div>
                </div>

                <div className='md:h-40'></div>
                <div className='bg-ash backdrop-blur-lg flex flex-row justify-center space-x-10 h-14 items-center w-full md:scale-95 md:-rotate-1'>
                    <FaGithub className='w-10 h-10' />
                    <FaInstagram className='w-10 h-10' />
                    <FaTwitter className='w-10 h-10' />
                    <FaTwitch className='w-10 h-10' />
                    <img
                        src={arrow}
                        alt='arrow'
                        className='w-36 h-36 pb-12 hidden md:block'
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
