let sections = document.querySelectorAll('section');
for(let section of sections){
    section.style.border = '2px solid #2d3436';
    section.style.borderRadius = '5px';
    section.style.margin = '10px'
}
let sectionss = document.getElementById('main');
// sectionss.style.backgroundColor = '#00b894';

sectionss.classList.add('textCenter');
sectionss.classList.remove('textLerg');




//! child sivling


const plecesContainer = document.getElementById('plecese-container');
// console.log(plecesContainer.childNodes);
// console.log(plecesContainer.childNodes[3]);
// console.log(plecesContainer.childNodes[3].nextSibling);


const plecesUl = document.querySelector("#plecese-container ul");
console.log(plecesUl);

//! creat element 

let creat = document.createElement('p');
let creatt = document.createElement('li');
console.log(creatt.innerHTML = ' hi im jillu');
console.log(plecesUl.appendChild(creatt));            //?li
console.log(creat);
let crat2 =document.createElement('li');
console.log(crat2.innerHTML = 'hi this is tanvir');
console.log(plecesUl.appendChild(crat2));