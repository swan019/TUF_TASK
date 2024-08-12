import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {


    return (
<nav className='bg-white fixed top-0 z-[10] dark:bg-[#0F0F0F] h-[73px] flex justify-between items-center w-full'>
    <div className='flex  flex-grow  justify-center gap-[40%] items-center w-[85%] mx-auto'>
        <Link to="/">
            <div>
                <svg
                    width="125"
                    height="26"
                    viewBox="0 0 135 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Company Logo"
                >
                    <path d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z" fill="#D41F30"></path>
                    <path d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z" fill="#D41F30"></path>
                    <path d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z" fill="#D41F30"></path>
                </svg>
            </div>
        </Link>

        <div className='flex justify-between items-center gap-8 w-[20%]'>

            <button className='px-4 py-2 bg-[#D41F30] text-white rounded-md'>
                <Link to="/dashboard">
                    Dashboard
                </Link>
            </button>
        </div>
    </div>

    {/* Media Queries */}
    <style jsx>{`
        @media (max-width: 768px) {
            nav {
                height: auto;
                padding: 0.5rem;
                display: justify-center
            }
            .flex {
                flex-direction: row;
                align-items: center;
            }
            .w-[85%] {
                width: 95%;
            }
            .gap-8 {
                gap: 1rem;
            }
            .w-[20%] {
                width: 100%;
                justify-content: space-around;
            }
            .p-2 {
                padding: 0.5rem;
            }
            .px-4 {
                padding-left: 1rem;
                padding-right: 1rem;
            }
            .py-2 {
                padding-top: 0.5rem;
                padding-bottom: 0.5rem;
            }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
            .w-[85%] {
                width: 90%;
            }
            .gap-8 {
                gap: 2rem;
            }
        }
    `}</style>
</nav>

    )
}

export default Navbar;
