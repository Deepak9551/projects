const button =document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',

]
const types = ['info' ,'success','error']
button.addEventListener('click',() => createNotification())

function createNotification(message = null ,type =null){
    const noti =document.createElement('div')
    noti.classList.add('toast')
    noti.classList.add(type ? type : getRandomType())

    noti.innerText =message ? message : getRandomMessage()

    toasts.appendChild(noti)

    setTimeout(()=>{
        noti.remove()
    },3000)
}


function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}
function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}

