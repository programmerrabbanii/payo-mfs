document.getElementById('submit-btn').addEventListener('click', function(event){
    event.preventDefault();
    let phoneNumber=document.getElementById('phNumber').value
    let pinNumber=document.getElementById('pin').value


    if(phoneNumber=== '20028' && pinNumber==='1234'){
        console.log('Thank you , you are logged now');
        window.location.href='./home.html'
    } else{
         alert('opps sorry , wrong phone or pin')
    }


})