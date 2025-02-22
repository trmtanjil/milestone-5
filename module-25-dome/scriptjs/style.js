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




function calculateWatchTime( times ) {

    let sum = 0;
    
    for(let allTime of times){
    
    sum = sum + allTime;
    
    if(typeof sum === 'string'){
    
    return 'invalid'
    
    }
    
    }
    
    let hower = Math.floor(sum/3600);
    
    let remainSec = sum%3600;
    
    let minut = Math.floor(remainSec/60);
    
    let mainSec = remainSec % 60;
    
    return {hower:hower, minut:minut, second:mainSec}
    
    }
    console.log(calculateWatchTime([5600]));