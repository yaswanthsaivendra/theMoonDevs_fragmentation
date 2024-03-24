

const BurnBar = ({ burnAmount, onChangeBurnAmount, executeBurn, txButton, burnTxHash, txProgress }) => {

    return (
        <>
            <div className="burn_bar">
                <div className="input_value_box">
                    <p className="input_muted">Enter amount to Burn</p>
                    <input
                        className="input_value"
                        type="text"
                        value={burnAmount}
                        placeholder="0.00"
                        onChange={onChangeBurnAmount}
                    />
                </div>
                <Button
                    variant="outlined"
                    onClick={executeBurn}
                    startIcon={
                        txProgress ? (
                            <CircularProgress size={20} color="inherit" />
                        ) : (
                            <AppIcon
                                url="/icons/fire.svg"
                                fill={IconFilter.primary}
                                size={1.5}
                                margin={0}
                            />
                        )
                    }
                >
                    <span>{txButton}</span>
                </Button>
            </div>
            {burnTxHash && (
                <div className="tx_links">
                    <AppTooltip
                        title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}
                    >
                        <AppExtLink
                            url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
                            className="header_link"
                        >
                            Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
                        </AppExtLink>
                    </AppTooltip>
                </div>
            )}
        </>
    )
}

export default BurnBar