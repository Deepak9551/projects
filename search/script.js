const search =document.querySelector('.search')
const btn =document.querySelector('.btn')
const input =document.querySelector('.input')
btn.addEventListener('click',()=>{
    search.classList.toggle('active') //toggle add or remove at same time
    input.focus()
   
})