
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
   const Ammount = document.getElementById('pay-ammountt').value;
   const convertAmmount = parseFloat(Ammount);
   
//    giv number
   const number = document.getElementById('login-numberr').value;

   
   //giv pinn 
   const pinn = document.getElementById('login-pin').value;
   const convertPinn = parseInt(pinn)

   // giv all ammount 
    const balanch = document.getElementById('main-banlanch').innerText;
    const convertBalanch = parseFloat(balanch)
   

    //condition section
    if(number.length===11){
        if(convertPinn=== 1234){
        const sum = convertAmmount +convertBalanch;
        document.getElementById('main-banlanch').innerText =sum;
        
        }
        else{
            alert('valid password')
        }
    }
    else{
        alert('valid phon number')
    }
    
})