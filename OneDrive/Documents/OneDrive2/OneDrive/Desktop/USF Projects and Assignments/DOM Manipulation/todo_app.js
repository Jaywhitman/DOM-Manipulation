/*const form = document.querySelector('#List');
const newTodo = document.querySelector('#addedlist');



form.addEventListener('submit', function(evt) {
    evt.preventDefault();
    alert("ITEM HAS BEEN ADDED!!!");

    const removeBtn = document.querySelector('.remove');
    removeBtn.innerText = "remove";

    ItemAdded = document.querySelector('.todo');
    ItemAdded.innerText = document.getElemenentId("List").value;

    newTodo.appendChild(ItemAdded);
    ItemAdded.appendChild(removeBtnn);

    form.reset();
});

newTodo.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });

*/
let todoForm = document.getElementById("newTodoForm");
  let todoList = document.getElementById("todoList");

  todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let removeButton = document.createElement("button");
    removeButton.innerText = "X";

    let newTodo = document.createElement("li");
    newTodo.innerText = document.getElementById("task").value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();
  });

  todoList.addEventListener("click", function(event) {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === "li") {
      event.target.style.textDecoration = "line-through";
    } else if (targetTagToLowerCase === "button") {
      event.target.parentNode.remove();
    }
  });

/*Const todo = document.querySelector(‘li’)
Todo.getAttribute(‘class’)
“todo”
Todo.setAttribute(‘class', ‘completed’)
Todo.className
“completed”
Todo.className += ‘ todo’
“completed todo”
Todo.classList.add(‘completed’)
Or 
Todo.classList.remove('completed')


Function toggleAllTodos(); {
Const todos = document.querySelectorAll(‘li’);

For (let li of todos) {
li.classList.toggle(‘completed’);
  }
}



/*.querySelector('.remove')
.addEventListner('click', function(r) {
r.preventDefault();
console.log('Item Removed');
}) 

.querySelector('.complete"]')
.addEventListner('click', function(c) {
c.preventDefault();
console.log('Task Crossed Out');
}) 

newTodo.textContent = ''
newTodo.classList.add
const ol = document.querySelector("ol");
const newLi = document.createElement("li");
ol.append(newTodo)
*/

/*.querySelector('input[type="checkbox"]')
.addEventListner('click', function(e) {
e.preventDefault();
console.log('Task Crossed Out or Item Removed');
}) */