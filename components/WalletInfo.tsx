const WalletInfo =({walletInfo}: any) =>{
    return(
        <div>
            <b>Wallet balance in Lovelace</b>
            <i>&nbsp;&nbsp;&nbsp;&nbsp;{walletInfo.balance}</i>
        </div>
    );
}
export default WalletInfo