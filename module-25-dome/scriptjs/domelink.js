
let informations = document.getElementsByTagName('li');
for(let information of informations){
    // console.log(information);    
    // console.log(information.innerText);
}
// console.log(informations);

let headdings = document.getElementsByTagName('h1');
for(let headding of headdings ){
    // console.log(headding.innerHTML);
}
//!       getElementByid
let changeHeading = document.getElementById('dombabaa').innerHTML = 'give me aro dom baba dom';
// console.log(changeHeading);

// console.log(document.getElementById('fevorite-place'));
// console.log(document.getElementById('fevorite-place').innerText ='you my enjoble person');


//!       getElementByClass

let fruits = document.getElementsByClassName('fevoritefrt');
// console.log(fruits);
let fruitss = document.getElementsByClassName('fevoritefrt');           //!We can also get inner text.
for(let fruit of fruitss){
    // console.log(fruit.innerHTML);
}

//! queryselectorAll & queryselector  class

let selectAll =document.querySelectorAll('.domIsdom li');
// console.log(selectAll);
// console.log(selectAll.innerHTML);

let selecsingle =document.querySelector('.domIsdom li');
// console.log(selecsingle.innerHTML);

for(let classs of selectAll){
    // console.log(classs);
    // console.log(classs.innerHTML);
}
//! queryselectorAll & queryselector  id
let idselect = document.querySelectorAll('#selectId li');
// console.log(idselect);

let idselects = document.querySelector('#selectId li');
// console.log(idselects);

for(let ids of idselect){
    // console.log(ids.innerHTML);
    // console.log(ids);
}

