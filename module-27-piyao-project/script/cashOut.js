document.getElementById('login-btnn').addEventListener('click',function(event){
     event.preventDefault();
     const cashOutt = document.getElementById('mcash-Out').value;
     const convertcasOutt = parseInt(cashOutt);

     
     const mmainbalanch = document.getElementById('main-banlanch').innerText;
     const convertAmmountt= parseFloat(mmainbalanch);
 
     
     //login number 
    const nameLogin =  document.getElementById('login-number').value;
    
    //pin section
    const cpin = document.getElementById('login-pin').value;
    const convertcPin = parseInt(cpin)

     //? condition section
     if(nameLogin.length===11){
        if(convertcPin===1234){
            const sum =convertAmmountt -convertcasOutt ;
            document.getElementById('main-banlanch').innerText=sum;
        }
     }
     else{
        alert(' valin mobil number')
     }

})