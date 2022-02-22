document.getElementById( 'deposit-btn' ).addEventListener( 'click', function () {
    const depositInputText = document.getElementById( 'deposit-input' );
    const depositInputValue = parseFloat( depositInputText.value );
    // console.log( depositInputValue );
    const depositeBalanceText = document.getElementById( 'deposit-balance' );
    const depositBalance = parseFloat( depositeBalanceText.innerText );
    // console.log( depositBalance );
    const depositAmount = depositInputValue + depositBalance;
    depositeBalanceText.innerText = depositAmount;
    //Update Total
    const totalBalanceText = document.getElementById( 'total-balance' );
    const totalBalanceDeposit = parseFloat( totalBalanceText.innerText );
    totalBalanceText.innerText = totalBalanceDeposit + depositInputValue;
    //clear input
    depositInputText.value = '';
} );

//Withdraw
document.getElementById( 'withdraw-btn' ).addEventListener( 'click', function () { 
    const withdrawInputText = document.getElementById( 'withdraw-input' );
    const withdrawInputValue = parseFloat( withdrawInputText.value );

    const withdrawBalanceText = document.getElementById( 'withdraw-balance' );
    const withdrawBalance = parseFloat( withdrawBalanceText.innerText );

    const withdrawAmount = withdrawInputValue + withdrawBalance;
    withdrawBalanceText.innerText = withdrawAmount;

    //Update Total
    const totalBalanceText = document.getElementById( 'total-balance' );
    const totalBalanceWithdraw = parseFloat( totalBalanceText.innerText );
    totalBalanceText.innerText = totalBalanceWithdraw - withdrawInputValue;
    //clear input
    withdrawInputText.value = '';


} );
