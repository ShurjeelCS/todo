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
    remove.setAttribute(`class`, `remove`)

    
        item.textContent = taskItem;
        rowOutline.appendChild(tick);
        rowOutline.appendChild(item);
        rowOutline.appendChild(remove);
        list.appendChild(rowOutline);      
}

const deleteBtn = document.querySelector(`.remove`);
deleteBtn.addEventListener(`click`, () => {
    taskList.pop();
    console.log(taskList + taskList.length);
    list.removeChild(list.lastChild);
});
