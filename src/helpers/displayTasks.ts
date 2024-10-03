interface Task {
  text: string;
  isDone: boolean;
  priority?: string;
  id: number;
}

export const displayTasks = (tasks: Task[], ul: HTMLElement) => {
  ul.innerHTML = "";
  tasks.forEach((task) => {
    const id: string = `task-${task.id}`;
    const taskElement: HTMLElement = document.createElement("li");

    const labelElement: HTMLElement = document.createElement("label");
    taskElement.textContent = task.text;
    labelElement.setAttribute("for", id);

    const checkboxElement: HTMLInputElement = document.createElement("input");
    checkboxElement.type = "checkbox";
    checkboxElement.name = task.text;
    checkboxElement.id = id;
    checkboxElement.checked = task.isDone;
    if (task.isDone) {
      taskElement.style.textDecoration = "line-through";
    } else {
      taskElement.style.textDecoration = "none";
    }

    checkboxElement.addEventListener("change", () => {
      task.isDone = !task.isDone;
      if (task.isDone) {
        taskElement.style.textDecoration = "line-through";
      } else {
        taskElement.style.textDecoration = "none";
      }
    });

    taskElement.appendChild(labelElement);
    taskElement.appendChild(checkboxElement);
    if (task.priority == "medium") {
      taskElement.style.color = "rgb(231, 231, 0)";
    } else if (task.priority == "high") {
      taskElement.style.color = "rgb(255, 69, 69)";
    } else {
      taskElement.style.color = "#000";
    }
    console.log(task);
    ul.appendChild(taskElement);
  });
};
