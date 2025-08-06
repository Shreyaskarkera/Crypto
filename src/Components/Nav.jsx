import { useState } from "react";
import { TwitterLogo, GithubLogo, List, X } from 'phosphor-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent text-white px-4 py-3">
            {/* Nav container */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <h3 className="font-bold text-lg font-inter">CRYPTODEX</h3>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center justify-between w-full text-[12px] font-bold">
                    {/* Center Nav Links */}
                    <ul className="flex space-x-8 mx-auto">
                        <li className="cursor-pointer hover:text-gray-400">Home</li>
                        <li className="cursor-pointer hover:text-gray-400">Market</li>
                        <li className="cursor-pointer hover:text-gray-400">Choose Us</li>
                        <li className="cursor-pointer hover:text-gray-400">Join</li>
                    </ul>

                    {/* Right Social Icons */}
                    <ul className="flex space-x-4 justify-center">
                        <li className="cursor-pointer hover:text-[#1DA1F2]">
                            <TwitterLogo size={16} weight="fill" />
                        </li>
                        <li className="cursor-pointer hover:text-gray-400">
                            <GithubLogo size={16} weight="fill" />
                        </li>
                    </ul>
                </div>


                {/* Mobile Menu Button - right aligned */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <List size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 flex flex-col items-center space-y-3 text-[12px] font-bold">
                    <ul className="space-y-2 text-center">
                        <li className="cursor-pointer hover:text-gray-400">Home</li>
                        <li className="cursor-pointer hover:text-gray-400">Market</li>
                        <li className="cursor-pointer hover:text-gray-400">Choose Us</li>
                        <li className="cursor-pointer hover:text-gray-400">Join</li>
                    </ul>
                    <ul className="flex space-x-4 pt-2">
                        <li className="cursor-pointer hover:text-[#1DA1F2]">
                            <TwitterLogo size={16} weight="fill" />
                        </li>
                        <li className="cursor-pointer hover:text-gray-400">
                            <GithubLogo size={16} weight="fill" />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
