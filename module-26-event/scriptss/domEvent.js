//? option e 2 event hendle 
function eventHendle(){
    document.body.style.backgroundColor=('#233322')
}
function eventCOlor(){
    document.body.style.backgroundColor = 'green';
}

//? option 3 event hendle 

const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = function makebluee(){
    document.body.style.backgroundColor = 'blue'
}

//? option 4 event hendle 
const makePurple = document.getElementById('make-purple');
makePurple.onclick = makepuple;
// console.log(makePurple);
function makepuple(){
    document.body.style.backgroundColor = 'purple';
}


//? optoin 5 add even listener 
  //documnet.getElementById('idNmae').addEvenListener('event type', handler);
  document.getElementById('make-green').addEventListener('click', function maekGren(){
    document.body.style.backgroundColor = 'green';
})

document.getElementById('make-orang').addEventListener('click', function makeOrang(){
    document.body.style.backgroundColor = '#e67e22'
})


//! click change headding
document.getElementById('clink-chang').addEventListener('click',function(){
    // console.log('button click');
    const evnHendleElement = document.getElementById('page-titel');
    // console.log(evnHendleElement);
    evnHendleElement.innerText = 'update info comming....'
})



