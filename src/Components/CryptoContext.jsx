
import React, { createContext, useContext, useEffect, useState } from 'react';

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
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

    return (
        <CryptoContext.Provider value={{ coins, loading }}>
            {children}
        </CryptoContext.Provider>
    );
};

export const useCrypto = () => useContext(CryptoContext);