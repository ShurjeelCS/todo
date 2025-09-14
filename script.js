let taskList = [];
const addBtn = document.querySelector(`.add`);
const list = document.querySelector(`.list`);
addBtn.addEventListener(`click`, () => {
    let task = document.querySelector(`.input`).value
    taskList.push(task);
    addItem(task);
});

function addItem(taskItem) {
    
    const rowOutline = document.createElement(`div`);
    const tick = document.createElement('i');
    tick.setAttribute(`id`, `tick`);
    tick.setAttribute(`class`, `bx  bx-check`);
    itemOutline.setAttribute(`style`, `border-radius: 20px;
    padding: 0.5em 1em;
    background-color: #A8FBD3;
    border: 2px solid rgba(0, 0, 0, 0.3);`);
    const item = document.createElement(`p`);
    
        item.textContent = taskItem;
        itemOutline.appendChild(item);
        list.appendChild(itemOutline);      
}

const deleteBtn = document.querySelector(`.remove`);
deleteBtn.addEventListener(`click`, () => {
    taskList.pop();
    console.log(taskList + taskList.length);
    list.removeChild(list.lastChild);
});
