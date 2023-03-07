const button=document.querySelector('.btn-add');
const divContainer=document.querySelector('#div-container');

button.addEventListener('click',addButton);

const pictures = ['./image/belt.jpg','./image/laptop.jpg','./image/pone.jpg','./image/facecap.jpg','./image/sneakers.jpg']
let count = 0;

function addButton(){
    const NewButton=document.createElement('div');
    NewButton.classList.add('fast')
    
    // divContainer.appendChild(NewButton);
    // document.body.appendChild(divContainer);
    NewButton.innerText='play';
    const NewTag=document.createElement('img'); 
    // NewTag.src ='./image/belt.jpg';
    // NewTag.src ='./image/facecap.jpg';
    divContainer.appendChild(NewTag);
    NewTag.style.width='125px';
    NewTag.style.height='125px';
    NewTag.style.margin='10px';
    NewTag.src=pictures[count]
   
    count++
    

} 



