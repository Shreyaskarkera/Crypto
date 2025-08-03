
import React, { useEffect, useState } from 'react';

const HomeCryptos = () => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [coinRes, tickerRes] = await Promise.all([
                    fetch('https://api.coinpaprika.com/v1/tickers?limit=10'),
                    fetch('https://api.coinpaprika.com/v1/tickers')
                ]);
                const coinList = await coinRes.json();
                const tickerList = await tickerRes.json();

                const meargeData = tickerList.map(ticker => {
                    const coinInfo = coinList.find(c => c.id === ticker.id);

                    return {
                        ...ticker,
                        logo: `https://coinpaprika.com/coin/${ticker.id}/logo.png`,
                        symbol: coinInfo?.symbol || '',
                    };
                });
                setCoins(meargeData);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching data:', err);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return <p className="text-white">Loading...</p>;

    return (
        <div className="text-white px-6">
            <h1 className="text-3xl font-bold mb-4">Top Cryptocurrencies</h1>

        </div>
    );
};

export default HomeCryptos;
