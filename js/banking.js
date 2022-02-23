
//Deposit Section
document.getElementById( 'deposit-btn' ).addEventListener( 'click', function () {
    const depositInputField = document.getElementById( 'deposit-input' );
    const depositInputValue = parseFloat( depositInputField.value );
    if ( depositInputValue > 0 ) {
        const depositBalanceText = document.getElementById( 'deposit-balance' );
        const depositBalanceValue = parseFloat( depositBalanceText.innerText );
        depositBalanceText.innerText = depositBalanceValue + depositInputValue;

        //update Total
        const balanceTotalField = document.getElementById( 'total-balance' );
        const totalBalance = parseFloat( balanceTotalField.innerText );
        balanceTotalField.innerText = totalBalance + depositInputValue;
    }
    

    //clear input
    depositInputField.value = '';

} );

//Withdraw Section 
document.getElementById( 'withdraw-btn' ).addEventListener( 'click', function () {
    const withdrawInputField = document.getElementById( 'withdraw-input' );
    const withdrawInputValue = parseFloat( withdrawInputField.value );
    if ( withdrawInputValue > 0 ) {
        const withdrawBalanceText = document.getElementById( 'withdraw-balance' );
        const withdrawBalanceValue = parseFloat( withdrawBalanceText.innerText );
        withdrawBalanceText.innerText = withdrawBalanceValue + withdrawInputValue;
        
        //update Total
        const balanceTotalField = document.getElementById( 'total-balance' );
        const totalBalance = parseFloat( balanceTotalField.innerText );
        balanceTotalField.innerText = totalBalance - withdrawInputValue;
    }
    //Clear input
    withdrawInputField.value = '';

} );


// function getInputField(inputId) {
//     const inputField = document.getElementById( inputId );
//     const inputValue = parseFloat( inputField.value );
//     inputField.value = '';
//     return inputValue;
// }
// function getTextField( textFieldId,amount ) {
//     const balanceText = document.getElementById( textFieldId, );
//     const balanceValue = parseFloat( balanceText.innerText );
//     balanceText.innerText = balanceValue + amount;
// }
// function updateTotral(amount,isAdd) {
//     const balanceTotalField = document.getElementById( 'total-balance' );
//     const totalBalance = parseFloat( balanceTotalField.innerText );
    
//     if ( isAdd==true ) {
//         balanceTotalField.innerText = totalBalance + amount;
//     }else {
//         balanceTotalField.innerText = totalBalance - amount;
//     }
    
// }