document.getElementById('add-Mony').style.display= 'block';
document.getElementById('chashOut-section').style.display= 'none';

document.getElementById('add-Moyey-box').addEventListener('click',function(){
 document.getElementById('chashOut-section').style.display= 'none';
document.getElementById('add-Mony').style.display= 'block';
})
document.getElementById('chash-out-box').addEventListener('click', function(){
    document.getElementById('add-Mony').style.display= 'none';
    document.getElementById('chashOut-section').style.display= 'block';
})