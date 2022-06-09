import React from "react";
import html from "../components/assets/html.png";
import css from "../components/assets/css.png";
import javascript from "../components/assets/javascript.png";
import react from "../components/assets/react.png";

const Skills = () => {
    return (
        <>
            <div className='bg-beige'>
                <div className='flex md:flex-row flex-col justify-center'>
                    <img
                        src={react}
                        alt='react'
                        className='lg:w-96 lg:h-96  object-contain'
                        name='skills'
                    />
                </div>
                <div className='lg:flex lg:flex-row grid grid-cols-1 text-center md:justify-center justify-items-center'>
                    <img
                        src={html}
                        alt='html'
                        className='w-80 h-80 object-contain rounded-full'
                    />
                    <div className='md:w-96 h-80 w-full flex font-nunito'>
                        <p className='self-center text-justify p-5'>
                            Brinnande programmerare och entusiastisk när det
                            kommer till allt. Under året som gått är det dessa
                            teknologier som omringat mig och min vardag. HTML,
                            CSS, JavaScript, React. Viss kunskap om google
                            analytics, och har även gjort enklare saker i
                            inkscape. Lorem ipsum dolor, sit amet consectetur
                            adipisicing elit. Adipisci quos odio hic quas
                            quibusdam sit nemo quae natus id incidunt?
                        </p>
                    </div>
                    <img
                        src={javascript}
                        alt='javascript'
                        className='w-80 h-80 object-contain rounded-full'
                    />
                </div>
                <div className='flex flex-row justify-center'>
                    <img
                        src={css}
                        alt='css'
                        className='w-80 h-80 object-contain rounded-full'
                    />
                </div>
            </div>
        </>
    );
};

export default Skills;
