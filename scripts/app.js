const toDoInput = document.querySelector("#toDoInput");
const toDoButton = document.querySelector("#toDoButton");
const toDoList = document.querySelector("#toDoList");

toDoButton.addEventListener("click",addToDo);
toDoList.addEventListener("click",deleteCheck);
function addToDo(event){
    event.preventDefault();
    console.log("hello")
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newToDo = document.createElement("li");
    // newToDo.innerText ="hey";
    newToDo.innerText =toDoInput.value;

    todoDiv.appendChild(newToDo)
    const checkButton = document.createElement("button");
    checkButton.innerHTML="<i class = 'fas fa-check'></i>"
    checkButton.classList.add("check-btn")
    todoDiv.appendChild(checkButton);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML="<i class = 'fas fa-trash'></i>"
    deleteButton.classList.add("delete-btn")
    todoDiv.appendChild(deleteButton);
    toDoList.appendChild(todoDiv); 
    toDoInput.value="";   
}
function deleteCheck(e){
    const item = e.target;
    if(item.classList[1]==="fa-trash"){
        const todo = item.parentElement.parentElement;
        todo.remove();
    }
    if(item.classList[1]==="fa-check"){
        const todo = item.parentElement.parentElement;
        todo.classList.toggle("completed");
    }
}