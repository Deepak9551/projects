const addBtn =document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))
console.log(notes)

if(notes){
    notes.forEach(note => addNewNode(note))
}
addBtn.addEventListener('click', ()=> addNewNode())

function addNewNode(text = ''){
    const note =document.createElement('div')
    note.classList.add('note')  
    
    note.innerHTML=`
    <div class="tools">
            <button class="edit"><ion-icon name="create-outline"></ion-icon></button>
            <button class="delete"><ion-icon name="trash-outline"></ion-icon></button>

        </div>
       <div class="main ${text ? "" : "hidden"}"></div>
      <textarea class="${text ? "hidden" : ""}" ></textarea>`

      

      const editBtn = note.querySelector('.edit')
      const deleteBtn = note.querySelector('.delete')
      const main = note.querySelector('.main')
      const textarea = note.querySelector('textarea')

      textarea.value = text
      main.innerHTML = text
      
    deleteBtn.addEventListener('click',() =>{
        note.remove()
        updateLocalStorage()
    
    })
    editBtn.addEventListener('click',()=>{
        main.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    }) 

    textarea.addEventListener('input' ,(e) =>{
        const { value } = e.target

        main.innerHTML = value

        updateLocalStorage()
    })
    document.body.appendChild(note)
}

// localStorage.setItem('name','deepak')
// localStorage.getItem('name')
// localStorage.removeItem('name')
// localStorage.setItem('name', JSON.stringify('deepak'))
// JSON.parse(localStorage.getItem('name'))
// localStorage.removeItem('name')

function updateLocalStorage(){

    const notesText = document.querySelectorAll('textarea')

    const notes = []

    notesText.forEach(note => notes.push(note.value))
    console.log(notes)

    localStorage.setItem('notes',JSON.stringify(notes))
}