import React from 'react';
import ChooseUSImg from '../assets/Images/ChooseUSImg.svg';
import {
    Wallet,
    Pencil,
    Lightning,
    Headset,
    CurrencyBtc,
    HardDrives,
} from 'phosphor-react';

console.log(ChooseUSImg);
const ChooseUS = () => {
    return (
        <>
            <div className="mt-24">
                <h1 className="text-white text-center font-bold text-6xl">
                    WHY{' '}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-rose-700">
                        CHOOSE US
                    </span>
                </h1>
            </div>
            <div className="grid grid-cols-3 mt-24 gap-10">
                <div className="grid grid-rows-3 text-white gap-6">
                    <div className="flex items-start gap-4">
                        <Wallet size={28} weight="fill" className="text-white shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-7xl font-black rounded p-1 mt-2" />
                        <div>
                            <h1 className="text-lg font-bold mb-1">Connect Your Wallet</h1>
                            <p className="text-sm text-gray-300">
                                Quickly and securely connect your crypto wallet to start trading and managing your assets.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Pencil size={32} weight="fill" className="text-white shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-7xl font-black rounded p-1 mt-2" />
                        <div>
                            <h1 className="text-lg font-bold mb-1">SELECT YOUR QUANTITY</h1>
                            <p className="text-sm text-gray-300">
                                Easily select the amount to buy or sell with real-time price updates and flexible options.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <Lightning size={32} weight="fill" className="text-white shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-7xl font-black rounded p-1 mt-2" />
                        <div>
                            <h1 className="text-lg font-bold mb-1">CONFIRM TRANSACTION</h1>
                            <p className="text-sm text-gray-300">
                                Review details and confirm your transaction securely with one click — fast and transparent.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img src={ChooseUSImg} alt="Choose Us" className="h-11/12" />
                </div>

                <div className="grid grid-rows-3 text-white gap-6">
                    <div className="flex items-start gap-4">
                        <Headset size={32} weight="fill" className="text-white shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-7xl font-black rounded p-1 mt-2" />
                        <div>
                            <h1 className="text-lg font-bold mb-1">RECIVE YOUR OWN NFTS</h1>
                            <p className="text-sm text-gray-300">
                                Receive your unique NFTs instantly and securely in your wallet.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <CurrencyBtc size={32} weight="fill" className="text-white shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-7xl font-black rounded p-1 mt-2" />
                        <div>
                            <h1 className="text-lg font-bold mb-1">TAKE A MARKET TO SELL</h1>
                            <p className="text-sm text-gray-300">
                                List your NFTs on top marketplaces and reach buyers worldwide.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <HardDrives size={32} weight="fill" className="text-white shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center text-7xl font-black rounded p-1 mt-2" />
                        <div>
                            <h1 className="text-lg font-bold mb-1">DRIVE YOUR COLLECTION</h1>
                            <p className="text-sm text-gray-300">
                                Easily grow and manage your NFT collection in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUS;
