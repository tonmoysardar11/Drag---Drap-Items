const items = document.querySelectorAll('.item');
const boxes = document.querySelectorAll('.box');
let selected=null;
for (let item of items) {
    item.addEventListener('dragstart', (e) => {
        selected=e.target;
        selected.className+=' select'
        
    })
    item.addEventListener('dragend', (e) => {

        console.log(`Dragging end`, selected)
        
    })
}

for (let box of boxes) {
    box.addEventListener('dragenter', (e) => {
        e.target.className+= ' enter'
       
    })
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
        
    })
    box.addEventListener('dragleave', (e) => {
        e.target.className= 'box'
    })
    box.addEventListener('drop', (e) => {
        e.target.className= 'box'
        e.target.append(selected);

        selected.className='item'
        selected=null;
    })
}

