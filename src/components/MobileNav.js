import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { Link } from 'react-scroll';
 
const MobileNav = ({ showMenu, active }) => {
    return (
        <>
            <div
                className={
                    active
                        ? "lg:hidden fixed flex-col flex items-center justify-center inset-0 left-1/4 uppercase z-10 bg-ash/40 backdrop-blur-lg gap-8 p-8"
                        : "hidden"
                }
            >
                <XIcon onClick={showMenu} className='w-5' />
                <button>
                    <Link to='home' smooth={true} duration={400}>
                        Hem
                    </Link>
                </button>
                <button>
                    <Link to='skills' smooth={true} duration={500}>
                        Kunskap
                    </Link>
                </button>
                <button>
                    <Link to='projects' smooth={true} duration={500}>
                        Projekt
                    </Link>
                </button>
            </div>
        </>
    );
};

export default MobileNav;
