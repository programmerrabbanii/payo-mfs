document.getElementById('chas-out-btn').addEventListener('click',function(event){
    event.preventDefault()
    const chasout=document.getElementById('chas-out').value 
    const parse=parseInt(chasout)
    const chasOutPin=document.getElementById('chas-outPin').value 

    if(chasOutPin==='1234'){
        console.log('money is reducing');
        const availabale=document.getElementById('available-balance')
        const availabaleParsee=parseInt(availabale.innerText)

        const newBlance=availabaleParsee-parse;
        availabale.innerText=newBlance


    }
    
    else{
        alert('faild to chas out, pls try to again')
    }

})