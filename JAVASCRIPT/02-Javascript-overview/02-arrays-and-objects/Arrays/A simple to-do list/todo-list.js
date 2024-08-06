let todoListSimple = [];

function addTodoSimple() {
  const inputElement = document.querySelector('.js-todo-name-simple');
  const name = inputElement.value

  todoListSimple.push(name);

  inputElement.value = '';
  console.log(todoListSimple);
}

let todoListSimple2 = [];

function addTodoSimple2() {
  const inputElement = document.querySelector('.js-todo-name-simple-2');
  const name = inputElement.value

  todoListSimple2.push(name);
  inputElement.value = '';

  renderTodoSimple2();
}

function renderTodoSimple2() {
  let todoListHTML = '';

  for (let i = 0; i < todoListSimple2.length; i++) {
    const todo = todoListSimple2[i];
    todoListHTML += `
      <p>${todo}</p>
    `;
  }

  document.querySelector('.js-todo-list-simple-2')
    .innerHTML = todoListHTML;
}

let todoList = [];
renderTodoList();

function addTodo() {
  const todoNameElem = document.querySelector('.js-todo-name');
  const name = todoNameElem.value;

  const todoDueDateElem = document.querySelector('.js-todo-due-date');
  const dueDate = todoDueDateElem.value;

  todoList.push({
    name,
    dueDate
  });

  renderTodoList();
  todoNameElem.value = '';
  todoDueDateElem.value = '';
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    // const name = todoList[i].name;
    // const dueDate = todoList[i].dueDate;
    const { name, dueDate } = todoList[i];

    todoListHTML += `
      <div class="todo-row">
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button" onclick="deleteTodo(${i})">
          Delete
        </button>
      </div>
    `;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}