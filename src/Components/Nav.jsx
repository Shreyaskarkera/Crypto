import React from 'react'
import { Github, Twitter } from 'lucide-react';
const Nav = () => {
    return (
        <nav >
            <div className=" text-white flex justify-between items-center pt-3">
                <h3 className="font-bold text-lg font-inter">CRYPTODEX</h3>
                <ul className="flex space-x-8 text-[10px]">
                    <li className="cursor-pointer hover:text-gray-400 font-bold">Home</li>
                    <li className="cursor-pointer hover:text-gray-400 font-bold">Market</li>
                    <li className="cursor-pointer hover:text-gray-400 font-bold">Choose Us</li>
                    <li className="cursor-pointer hover:text-gray-400 font-bold">Join</li>
                </ul>
                <ul className="flex space-x-8 text-[10px]">
                    <li className="cursor-pointer hover:text-gray-400 font-bold text-[10px]"><Twitter size={16} strokeWidth={1.25} /></li>
                    <li className="cursor-pointer hover:text-gray-400 font-bold"><Github size={16} strokeWidth={1.25} /></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
