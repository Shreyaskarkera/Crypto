import React from 'react'

const Nav = () => {
    return (
        <nav className="bg-black text-white flex justify-between items-center m-3">
            <h3 className="font-bold text-lg font-inter">Crypto</h3>
            <ul className="flex space-x-8 text-[10px]">
                <li className="cursor-pointer hover:text-gray-400 font-bold">Home</li>
                <li className="cursor-pointer hover:text-gray-400 font-bold">Market</li>
                <li className="cursor-pointer hover:text-gray-400 font-bold">Choose Us</li>
                <li className="cursor-pointer hover:text-gray-400 font-bold">Join</li>
            </ul>
            <ul className="flex space-x-8 text-[10px]">
                <li className="cursor-pointer hover:text-gray-400 font-bold">twiter</li>
                <li className="cursor-pointer hover:text-gray-400 font-bold">discord</li>
            </ul>
        </nav>
    )
}

export default Nav
