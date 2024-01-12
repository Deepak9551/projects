const panels = document.querySelectorAll('.panel')
// console.log(panel)
panels.forEach((panel) =>{
    panel.addEventListener('click', ()=> {
        removeactiveclass()
        panel.classList.add('active')
})
})
function removeactiveclass( ){
    panels.forEach( (panels)=>{
        panels.classList.remove('active')
    })
}
