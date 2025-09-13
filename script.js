let taskList = [];
const addBtn = document.querySelector(`.add`);
const list = document.querySelector(`.list`);
addBtn.addEventListener(`click`, () => {
    let task = prompt(`What task do you wish to add?`)
    taskList.push(task);
    addItem(task);
});

function addItem(taskItem) {
    
    const itemOutline = document.createElement(`div`);
    itemOutline.setAttribute(`style`, `border-radius: 20px;
    padding: 0.5em 1em;
    background-color: #A8FBD3;
    border: 2px solid rgba(0, 0, 0, 0.3);`);
    const item = document.createElement(`p`);
    
        item.textContent = taskItem;
        itemOutline.appendChild(item);
        list.appendChild(itemOutline);      
}

const deleteBtn = document.querySelector(`.delete`);
deleteBtn.addEventListener(`click`, () => {
    taskList.pop();
    console.log(taskList + taskList.length);
    list.removeChild(list.lastChild);
});
