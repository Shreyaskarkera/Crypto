import { useCrypto } from "./CryptoContext";

const HomeCryptos = () => {
    const { coins, loading } = useCrypto();
    if (loading) return <p className="text-white">Loading...</p>
    return (
        <div className="flex gap-8 items-center justify-center flex-wrap mt-10">
            {coins.slice(0, 4).map((coin) => (
                <div key={coin.id} className="text-white text-center w-40">
                    <img
                        src={`https://static.coinpaprika.com/coin/${coin.id}/logo.png`}
                        className="w-16 h-16 mx-auto mb-2 "
                        alt={coin.name}
                        onError={(e) => (e.target.style.display = 'none')}
                    />
                    <p className="font-semibold">{coin.name}</p>
                    <p className="text-sm">
                        ${coin.quotes.USD.price.toFixed(2)}
                    </p>
                    <p
                        className={`text-xs ${coin.quotes.USD.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'
                            }`}
                    >
                        {coin.quotes.USD.percent_change_24h?.toFixed(2)}%
                    </p>
                </div>
            ))}
        </div>

    );
};

export default HomeCryptos;
