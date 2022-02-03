// const nao pode ter o valor reatribuido
// let variavel que nao pode ser acessada ou reatribuida fora do bloco de escopo
// var variavel comum

var listElement = document.getElementById("todo-list");
var formElement = document.getElementById("todo-form");

formElement.addEventListener("submit", function listenForSubmit(event) {
  event.preventDefault();
  var value = getInputValue();
  var todoItem = createTodoItem(value);
  appendTodoItemToList(todoItem);
});

function appendTodoItemToList(todoItem) {
  listElement.appendChild(todoItem);
}

function createTodoItem(value) {
  var listItemElement = document.createElement("li");
  listItemElement.innerText = value;
  return listItemElement;
}

function getInputValue() {
  return document.getElementById("todo-field").value;
}
