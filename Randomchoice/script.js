const tagsEL =document.getElementById('tags') //remove
const textarea = document.getElementById('textarea')
textarea.focus()
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value) //function call
  
})
function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()!=='').map(tag => tag.trim())
    tagsEL.innerHTML=''

    //  console.log(tags)    
    tags.forEach(tag =>{   // opertaion on each  tag
        const tagEL =document.createElement('span')
        tagEL.classList.add('tag')
        tagEL.innerText=tag
        tagsEL.appendChild(tagEL)
    })
}

function randomselect(){
    const times = 30
    const interval =setInterval(() =>{
       const randomtags =pickRandomTag() 

        highlight(randomtags)

        setTimeout(()=>{
            unhighlight(randomtags)
        },100)

        setTimeout(()=>{
            clearInterval(interval)
            setTimeout(()=>{
                const randomtags=pickRandomTag()
                highlight(randomtags)
            },100)
        },times*100)

    },100)
}
function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.add('unhighlight')
}