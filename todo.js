let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
},
{
    "userId": 20,
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

        todoItem.appendChild(textNode)
        todoList.appendChild(todoItem)

    }

   
}