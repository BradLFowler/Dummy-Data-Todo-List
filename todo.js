let arrayOfTodos = [
    {
    "userId": 10,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 5,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
    console.log(arrayOfTodos)
    console.log(arrayOfTodos[0].userId)
    console.log(arrayOfTodos[1].userId)
}

const populateTodos = () => {

    let todoList = document.getElementById("todo-list")


    for (i=0; i < arrayOfTodos.length; i++) {

        let textNode = document.createTextNode(arrayOfTodos[i].title)

        let todoItem = document.createElement("LI")

        if (arrayOfTodos[i].completed) {
            todoItem.classList.add("istrue");
        } else {
            todoItem.classList.add("isfalse");
        }

        todoItem.appendChild(textNode)
        todoList.appendChild(todoItem)

    }
   
}

const clearTodos = () => {

    clearAll = document.getElementById("todo-list")
    clearAll.innerHTML = ""
}

const userIn = () => {
    clearTodos();

    let todoList = document.getElementById("todo-list");

    const userValue = document.getElementById("userid").value;

    const arrayFilter = arrayOfTodos.filter(array => array.userId == userValue);

    for (let i = 0; i < arrayFilter.length; i++) {

        let todoItem = document.createElement("LI");

        todoItem.innerHTML = arrayFilter[i].userId;

        todoList.appendChild(todoItem);

    }

}

const completedTodos = () => {
    clearTodos();

    let todoList = document.getElementById("todo-list");
  
    const arrayFilter = arrayOfTodos.filter(array => array.completed === true);
  
    for (let i = 0; i < arrayFilter.length; i++) {

      let todoItem = document.createElement("LI");
  
      todoItem.innerHTML = arrayFilter[i].completed;
      
      todoList.appendChild(todoItem);
    }

}

const notCompletedTodos = () => {
    clearTodos();

    let todoList = document.getElementById("todo-list");
 
    const arrayFilter = arrayOfTodos.filter(array => array.completed === false);
  
    for (let i = 0; i < arrayFilter.length; i++) {
      let todoItem = document.createElement("LI");
  
      todoItem.innerHTML = arrayFilter[i].completed;
      
      todoList.appendChild(todoItem);
    }

}