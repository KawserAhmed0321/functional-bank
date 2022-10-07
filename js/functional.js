
function getInputValue(inputId) {
    
    const inputField = document.getElementById(inputId);
    // const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputField.value);
    // clear input field
    inputField.value = '';

    return amountValue;
};

function updateTotalField(totalField,amount)
{
    const totalelement = document.getElementById(totalField);
    const previouseTotal=parseFloat(totalelement.innerText);
    totalelement.innerText = previouseTotal+amount;
};

function  getCurrentbalance()
{
    const balance = document.getElementById('balance-total');
    const previuseBalance=parseFloat(balance.innerText);
    return previuseBalance;
};

function balanceUpdate(amount,isAdd)
{
    const balancetotal = document.getElementById('balance-total');
    const previuseBalance = getCurrentbalance();
    if (isAdd == true)
    {
        balancetotal.innerText = previuseBalance+amount;
    }
    else{
        balancetotal.innerText =previuseBalance - amount;
    }
   

}



//deposit btn
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depostInput= getInputValue('deposit-input');
    
  
  if(depostInput > 0)
  {
      updateTotalField('deposit-total', depostInput);
      balanceUpdate(depostInput,true);
  }
   
});

//withdaw btn

document.getElementById('withdraw-btn').addEventListener('click',function(){
   
    const withdawInput = getInputValue('withdraw-input');
    const currentbalance = getCurrentbalance();
    if (withdawInput >0 &&  withdawInput < currentbalance)
    {
        updateTotalField('withdaw-total', withdawInput);
        balanceUpdate(withdawInput, false);
    };

 

});