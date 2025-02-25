document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
   const number= document.getElementById('login-number').value;
   const pin =  document.getElementById('login-pin').value;
    const convertedpin = parseInt(pin)

    if(number.length===11){
        if(convertedpin === 1234){
            window.location.href="main.html";
        }
        else{
            alert('please valid password')
        }
    }
    else{
        alert('please valid number')
    }


})