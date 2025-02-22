// 1. where to add 
const ulList =document.getElementById('mainlist');
//2. what to be added
const li =document.createElement('li');
li.innerHTML = 'pahar bar noo';

//3 add the child
ulList.appendChild(li);
 


//! where to added
const mainContainer =document.getElementById('main-item');

//? what to addded
const section = document.createElement('section');
const h2 = document.createElement('h2');
h2.innerText = 'food item list ';

section.appendChild(h2)
const ul= document.createElement('ul');
const li3 = document.createElement('li');
li3.innerText = 'biyani';
ul.appendChild(li3);
const li2 = document.createElement('li');
li2.innerText = 'vagitable';
ul.appendChild(li2)

section.appendChild(ul);
mainContainer.appendChild(section);



//! set innerHTML directly 
const sectionDewss = document.createElement('section');
sectionDewss.innerHTML = `
<h1>my Dress section</h1>
<ul>
<li>T-Shirt</li>
<li>Lungi</li>
<li>Panjabi</li>
</ul>
`;
mainContainer.appendChild(sectionDewss);