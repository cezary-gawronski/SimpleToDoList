{
  const tasks = [
    {
      content: "nagrać lekcję",
      done: false,
    },

    {
      content: "zjeść pierogi",
      done: true,

    },
  ];


  const addNewTasks = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };


  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  }


  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
      <li
      ${task.done ? "class=\"todoList__item--done\"" : ""}>
     
      ${task.content}
      </li> <button class="todoForm__buttonRemove js-remove">usuń</button>`;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      })
    });
  };


  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();

    if (newTaskContent === "") {
      return;
    }
    addNewTasks(newTaskContent);
  };


  const init = () => {
    render();

    const form = document.querySelector(".js-form");
    form.addEventListener("submit", onFormSubmit);
  };

  init();
}