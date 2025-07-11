"use client";
import { useState } from "react";

const NavbarMenuCPSI = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">

            <button className="flex flex-col justify-center items-center w-10  cursor-pointer " onClick={() => setOpen(!open)} aria-label="Abrir menu">
                <img src="/menu-sanduiche.svg" alt="Menu" />
            </button>

            {open && (
                <div className="absolute right-0 mt-0.5 w-40 bg-white shadow-lg rounded-md z-50">
                    <ul className="flex flex-col">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-t-md">
                                1 cpsi
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                                2 cpsi
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 rounded-b-md">
                                3 cpsi
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavbarMenuCPSI;