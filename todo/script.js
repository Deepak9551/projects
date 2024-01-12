const form =document.getElementById('form')
const input =document.getElementById('input')
const todoUL = document.getElementById('todos')

const todos =JSON.parse(localStorage.getItem('todos'))
if (todos) {
    todos.forEach((todo)=> addtodo(todo))
}

form.addEventListener('submit',(e) =>{
    e.preventDefault() //prvent form for having default behaviour
    addtodo()

})

function addtodo(todo){
    let todotext = input.value

    if(todo){
        todotext= todo.text
        
    }
    
    if(todotext){
        const todoEL =document.createElement('li')
        if(todo && todo.completed){
            todoEL.classList.add('completed')
           
        }
        todoEL.innerHTML =todotext

        todoEL.addEventListener('click',() => 
        {
            todoEL.classList.toggle('completed')
            updateLS()
        } )
         
        todoEL.addEventListener('contextmenu' ,(e) => {
            e.preventDefault()

            todoEL.remove()
            updateLS()
        })
        
        todoUL.appendChild(todoEL)


        input.value = ''

        updateLS()
   
    }
}

function updateLS(){
    const todoEL = document.querySelectorAll('li')

    const todos = []
    todoEL.forEach(todoEL =>{
        todos.push({
            text: todoEL.innerText,
            completed:todoEL.classList.contains('completed')
        })
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}