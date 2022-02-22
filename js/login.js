document.getElementById( 'login-btn' ).addEventListener( 'click', function () {
    const userEmailField = document.getElementById( 'user-email' );
    const userEmail = userEmailField.value;
    const userPasswordField = document.getElementById( 'user-password' );
    const userPassword = userPasswordField.value;
    if ( userEmail == 'ahzihan@gmail.com' && userPassword == 'ahzihan' ) {
        window.location.href = 'baper-bank.html';
    }
    else {
        alert( 'Please, Enter your valid email or password!' );
    }
} );