import { useEffect } from 'react';

export const useCoinData = (setCoinData) => {
    useEffect(() => {
        CoinGeckoApi.fetchCoinData()
            .then((data: any) => {
                //console.log("coin stats", data);
                setCoinData(data?.market_data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
};


