import React from 'react'
import {
    TwitterLogo,
    FacebookLogo,
    DiscordLogo,
    YoutubeLogo
} from 'phosphor-react';
import FooterImg from '../assets/Images/FooterImg.png'
import FooterImg2 from '../assets/Images/FooterImg2.png'
const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4">

                {/* Left Image */}
                <div className="flex justify-center">
                    <img src={FooterImg} alt="Decorative" className=" object-cover rounded-full" />
                </div>

                {/* Center Content */}
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-4 gap-4 mb-3">
                        <TwitterLogo size={32} weight="fill" className="text-[#e3e3e3] hover:text-[#1DA1F2] transition-colors duration-200 cursor-pointer" />
                        <FacebookLogo size={32} weight="fill" className="text-[#e3e3e3] hover:text-[#1877F2] transition-colors duration-200 cursor-pointer" />
                        <DiscordLogo size={32} weight="fill" className="text-[#e3e3e3] hover:text-[#7289da] transition-colors duration-200 cursor-pointer" />
                        <YoutubeLogo size={32} weight="fill" className="text-[#e3e3e3] hover:text-[#FF0000] transition-colors duration-200 cursor-pointer" />
                    </div>
                    <div className="text-sm text-gray-500 flex gap-6">
                        <p className="cursor-pointer hover:underline">Privacy</p>
                        <p className="cursor-pointer hover:underline">Terms of Use</p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img src={FooterImg2} alt="Decorative" className=" object-cover rounded-full" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
