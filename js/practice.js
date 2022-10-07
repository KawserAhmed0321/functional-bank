function getInput(inputId)
{
    const depositinput = document.getElementById(inputId);
    const inputAmount = parseFloat(depositinput.value);
    //clear
    depositinput.value = '';
    return inputAmount;
}

function totalField(totalId,amount)
{
    const Total = document.getElementById(totalId);
    const previouseTotal = parseFloat(Total.innerText);
    Total.innerText = previouseTotal+amount;
}

function currentbalance()
{
    const balance = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balance.innerText);
    return balanceAmount;

}

function getbalance(amount,isAdd)
{
    const balance = document.getElementById('balance-total');
    // const balanceAmount=parseFloat(balance.innerText);
    const balanceAmount =currentbalance();
    if(isAdd == true)
    {
        balance.innerText = balanceAmount + amount;
    }
    else{
        balance.innerText = balanceAmount - amount;
    }

}



document.getElementById('deposit-btn').addEventListener('click',function(){
    const inputdepositAmount = getInput('deposit-input');
   if(inputdepositAmount > 0)
   {
       totalField('deposit-total', inputdepositAmount);
       getbalance(inputdepositAmount,true);
   }
    
});





document.getElementById('withdraw-btn').addEventListener('click',function(){
    const inputwithdrawAmount = getInput('withdraw-input');
    totalField('withdraw-total', inputwithdrawAmount);
    getbalance(inputwithdrawAmount, false);

    const currentBalance = currentbalance();
    if (inputwithdrawAmount > 0 && currentBalance > inputwithdrawAmount)
    {
        totalField('withdraw-total', inputwithdrawAmount);
        getbalance(inputwithdrawAmount, false);
    }
    
})
