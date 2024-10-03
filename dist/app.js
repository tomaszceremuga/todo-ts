const btn = document.querySelector("#add-btn");
const input = document.querySelector("#task-name");
const ul = document.querySelector("#tasks-lis");
const inputLow = document.querySelector("#low");
const inputMedium = document.querySelector("#medium");
const inputHigh = document.querySelector("#high");
const tasks = [];
const displayTasks = () => {
    ul.innerHTML = "";
    tasks.forEach((task) => {
        const id = `task-${task.id}`;
        const taskElement = document.createElement("li");
        const labelElement = document.createElement("label");
        taskElement.textContent = task.text + " ";
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.text;
        checkboxElement.id = id;
        checkboxElement.checked = task.isDone;
        if (task.isDone) {
            taskElement.style.textDecoration = "line-through";
        }
        else {
            taskElement.style.textDecoration = "none";
        }
        checkboxElement.addEventListener("change", () => {
            task.isDone = !task.isDone;
            if (task.isDone) {
                taskElement.style.textDecoration = "line-through";
            }
            else {
                taskElement.style.textDecoration = "none";
            }
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        if (task.priority == "medium") {
            taskElement.style.color = "rgb(0, 69, 218)";
        }
        else if (task.priority == "high") {
            taskElement.style.color = "rgb(255, 69, 69)";
        }
        else {
            taskElement.style.color = "#000";
        }
        console.log(task);
        ul.appendChild(taskElement);
    });
};
btn.addEventListener("click", () => {
    const task = {
        text: input.value,
        isDone: false,
        priority: "low",
        id: tasks.length++,
    };
    if (inputLow.checked) {
        task.priority = "low";
    }
    else if (inputMedium.checked) {
        task.priority = "medium";
    }
    else if (inputHigh.checked) {
        task.priority = "high";
    }
    else {
        console.log("blad w przypisaniu priorytetu");
    }
    tasks.push(task);
    inputLow.checked = false;
    inputMedium.checked = false;
    inputHigh.checked = false;
    input.value = "";
    console.log(tasks);
    displayTasks();
});
