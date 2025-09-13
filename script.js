let taskList = [];
const addBtn = document.querySelector(`.add`);
const list = document.querySelector(`.list`);
addBtn.addEventListener(`click`, () => {
    let task = prompt(`What task do you wish to add?`)
    taskList.push(task);
    check();
});

function check() {
 if (taskList.length !== 0) {
    const item = document.createElement(`li`);
    for (const taskItem of taskList) {
        item.textContent = taskItem;
        list.appendChild(item);
        console.log(`hey`);
    }
        
}
}

