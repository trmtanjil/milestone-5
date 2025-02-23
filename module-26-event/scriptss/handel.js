document.getElementById('butn').addEventListener('click', function(){
    const pageTile= document.getElementById('page-title');
    pageTile.innerText = 'update information comming son...'
})




document.getElementById('liginUser').addEventListener('click', function(){
    const loginUpdat = document.getElementById('userInfo');
    loginUpdat.innerText = 'login user succesfully ,'
})


//? set eeven listener
document.getElementById('updateInfo').addEventListener('click', function(){
    //?2. get the text from theinput field
    const nameInput = document.getElementById('innput-name');
    const name = nameInput.value;
    console.log('name', name);
    
    // set the name 
    const loginfo = document.getElementById('logInfo');
    loginfo.innerText = name;

    
})







