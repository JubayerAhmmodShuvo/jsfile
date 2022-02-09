//handle deposit

document.getElementById('deposit-button').addEventListener('click', function() {
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;



    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerHTML;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerHTML = newDepositTotal;


    //update account balance
    const bananceTotally = document.getElementById('balance-total');
    const balanceTotallyText = bananceTotally.innerText;
    const previousBlananceTotal = parseFloat(balanceTotallyText);

    const newBlananceTotal = previousBlananceTotal + parseFloat(newDepositAmount);
    bananceTotally.innerText = newBlananceTotal;
    //clear the depositInput nameField

    depositInput.value = '';


});

//handle withdraw event handler

document.getElementById('withdraw-button').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWtithdrawAmount = parseFloat(withdrawAmountText);

    //set withdrew total amount

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerHTML;
    const previousWithdrawToral = parseFloat(previousWithdrawText);
    const newWtithdrawAmountTotal = previousWithdrawToral + newWtithdrawAmount;
    withdrawTotal.innerText = newWtithdrawAmountTotal;
    withdrawInput.value = '';

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWtithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

});