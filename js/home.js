document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    let addMoneyInput=document.getElementById('addAmount').value
    let pinNumberInput=document.getElementById('pin-num').value

    if(pinNumberInput ==='1234'){
        console.log('wow great adding your money Successfully');
        const balance=document.getElementById('available-balance')
        const addMoneyInputParse=parseFloat(addMoneyInput)
        const parseBalance=parseFloat(balance.innerText)

        const newBalance = addMoneyInputParse+ parseBalance;
        balance.innerText = newBalance
   


    } 
    
    else{
        alert('dur beta vul pin dis kn hala hakar')
    }


})