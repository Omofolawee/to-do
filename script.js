function addTodo() {
  const todoInput = document.querySelector("#todo-input");
  const todoText = todoInput.value;

  const todoList = document.querySelector("#todo-list");
  const li = document.createElement("li");

  const radio = document.createElement("input");
  radio.type = "checkbox";

  const label = document.createElement("label");
  label.textContent = todoText;

  li.appendChild(radio);
  li.appendChild(label);
  todoList.appendChild(li);
}
