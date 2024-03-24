
export function useFetchTransactions({ walletChain, setBurnTransactions. isSubscribed}) {

    const refetchTransactions = async () => {
        const isTestnet = isChainTestnet(walletChain?.id);
        let _chainObjects: any[] = [mainnet, avalanche, fantom];
        if (isTestnet) _chainObjects = [sepolia, avalancheFuji, fantomTestnet];
        try {
            const results = await Promise.all(ChainScanner.fetchAllTxPromises(walletChain?.id));
            let res;
            if (isSubscribed) {
                let new_chain_results: any[] = [];
                results.forEach((results_a: any[], index: number) => {
                    new_chain_results.push(
                        results_a.map((tx: any) => ({
                            ...tx,
                            chain: _chainObjects[index],
                        }))
                    );
                });
                res = new_chain_results.flat();
            }
            res = results.flat();
            res = ChainScanner.sortOnlyBurnTransactions(res);
            res = res.sort((a, b) => b.timeStamp - a.timeStamp);
            setBurnTransactions(res);
            }catch (error) {
                console.error(error);
            }
        };
        return refetchTransactions;
}




