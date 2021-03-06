{

  const tasks = [];

  const clearTaskInput = () => {
    document.querySelector(".js-newTask").value = "";
  };

  const setFocusTaskInput = () => {
    document.querySelector(".js-newTask").focus();
  };


  const addNewTasks = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };


  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      })
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");
    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      })
    });
  };


  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };


  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <div class="todoList__itemFlex">
      <button class="todoForm__button todoForm__button--done js-done">${task.done ? "&#10004;" : ""}</button>
      <li class="todoList__item ${task.done ? "todoList__item--done\"" : "\"todoList__item\""}>
      ${task.content}
      </li>
      <button class="todoForm__button todoForm__button--remove js-remove"></button>
      </div>
      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
    bindEvents();
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }
    addNewTasks(newTaskContent);
    clearTaskInput();
    setFocusTaskInput();

  };


  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  init();
}