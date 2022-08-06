// Info Date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");


// Task Container
const tasksContainer = document.getElementById("tasksContainer")

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString(es, {day: "numeric"});
    dateText.textContent = date.toLocaleString(es, {weekday: "long"});
    dateMonth.textContent = date.toLocaleString(es, {month: "short"});
    dateYear.textContent = date.toLocaleString(es, {year: "numeric"});
};

const addNewTask = e => {
    e.preventDefault();
    const {value} = e.target.taskText;
    if (!value) return;
    const task = document.createElement("div");
    task.classList.add("task", "roundBorder");
    task.addEventListener("click", changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
};

const changeTaskState = e => {
    e.target.classList.toggle("done");

};

setDate();
