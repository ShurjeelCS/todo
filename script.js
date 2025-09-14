let taskList = [];
const addBtn = document.querySelector(`.add`);
const list = document.querySelector(`.list`);
addBtn.addEventListener(`click`, () => {
    let task = document.querySelector(`.input`).value
    taskList.push(task);
    addItem(task);
});

function addItem(taskItem) {
    
    //create elements and set correct class to ensure styling
    const rowOutline = document.createElement(`div`);
    rowOutline.setAttribute(`class`, `itemRow`)
    const tick = document.createElement('i');
    tick.setAttribute(`id`, `tick`);
    tick.setAttribute(`class`, `bx  bx-check`);
    const item = document.createElement(`p`);
    const remove = document.createElement(`button`);
    remove.textContent= `Remove`;
    
    //handles remove item logic before remove button is added
    remove.setAttribute(`class`, `remove`)
    remove.addEventListener(`click`, () => {
            list.removeChild(remove.parentElement);
     })

     tick.addEventListener(`click`, () => {
        item.style.textDecoration = `line-through`;
     });
    
        item.textContent = taskItem;
        rowOutline.appendChild(tick);
        rowOutline.appendChild(item);
        rowOutline.appendChild(remove);
        list.appendChild(rowOutline); 
        
    

}