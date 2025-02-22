
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

//! js style 

let style = document.getElementById('fevorite-title').style.color = 'green';
let stylee = document.getElementById('fevorite-title').style.background = 'yellow';
// console.log(stylee);
let styleee = document.getElementById('fevorite-title').style.insetBlock;
// console.log(styleee);

   //! add.classlist  remove.classlist

let titile = document.getElementById('fevorite-title')
// console.log(titile.getAttribute('id'));
// console.log(titile.getAttribute('class'));
// console.log(titile.classList);
titile.classList.remove('innerClass')
titile.classList.add('innerClassss')
// console.log(titile);
// console.log(titile.classList);


//! set attribute('title', 'tools tip addd')

titile.setAttribute('title', 'set toplist js');
// console.log(titile);


// console.log(document.getElementsByClassName('titleClass '));
// console.log(document.getElementsByClassName('mainClass')[0].innerHTML);
// console.log(document.getElementsByClassName('mainClass')[0].innerHTML = '<h2>abc dom is changing</h2>');

// console.log(document.getElementsByClassName('titleClass '));
