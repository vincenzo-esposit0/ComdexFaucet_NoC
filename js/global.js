function Modulo() {

    const walletValue = wallet.value.trim();

    const wallet_reg_exp = /^comdex([a-zA-Z0-9])*/;
    
    //Effettua il controllo sul campo Wallet
    if ((wallet.length < 44) || (!wallet_reg_exp.test(walletValue))) {
        alert("Insert correct wallet");
        document.modulo.wallet.focus();
        return false;
    }
    //INVIA IL MODULO
    else {
        document.
        return true;
    }
}