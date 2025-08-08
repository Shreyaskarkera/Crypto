import React from 'react';
import { useCrypto } from './CryptoContext';
import { useState } from 'react';

const MarketUpdate = () => {
    const { coins, loading } = useCrypto();
    const [currentPage, setCurrentPage] = useState(1);
    const coinsPerPage = 10;

    if (loading) return <p className='text-white'>Loading...</p>;

    const limitedCoins = coins.slice(0, 50);

    const totalPages = Math.ceil(limitedCoins.length / coinsPerPage);
    const startIndex = (currentPage - 1) * coinsPerPage;
    const paginatedCoins = limitedCoins.slice(startIndex, startIndex + coinsPerPage);
    return (
        <>
            <div className='py-16' id="marketUpdte">

                <div>
                    <h2 className='text-white text-3xl font-bold'>Market Update</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className='text-white table-auto w-full mt-4 border-collapse md:mr-10'>
                        <thead>
                            <tr className='bg-gradient-to-r from-indigo-700 via-purple-500 to-pink-500 '>
                                <th className="text-left p-2">Coin</th>
                                <th className="text-center p-2">Price</th>
                                <th className="text-center p-2">24h Change</th>
                                <th className="text-center p-2">Market Cap</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedCoins.map((coin) => (
                                <tr key={coin.id} className="border-b border-gray-600 hover:bg-slate-900">
                                    <td className="p-2 flex items-center ">
                                        <img
                                            src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                                            className="w-10  h-10 float-right  mb-2"
                                            alt={coin.name} />

                                        <p className='text-center ml-10 mb-2 font-bold'>{coin.name}</p>
                                    </td>
                                    <td className="p-2 text-center">${coin.quotes?.USD?.price?.toFixed(2)}</td>
                                    <td className={`p-2 text-center ${coin.quotes.USD.percent_change_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                                        {coin.quotes?.USD?.percent_change_24h.toFixed(2)}%
                                    </td>
                                    <td className="p-2 text-center">${coin.quotes?.USD?.market_cap?.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-4xl size-8 font-bold  ${currentPage === page ? ' bg-radial-[at_25%_25%] from-blue-700  to-pink-500 text-white ' : 'bg-white'}`}
                            >
                                {page}
                            </button>
                        ))}
                </div>
            </div>
        </>
    );
};

export default MarketUpdate;
