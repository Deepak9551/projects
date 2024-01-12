const boxes=document.querySelectorAll('.box')
window.addEventListener('scroll',checkboxes)
checkboxes()
function checkboxes(){
    const triggerBottom =window.innerHeight / 5 * 4
    console.log(triggerBottom)
    boxes.forEach( box =>{
        const boxtop=box.getBoundingClientRect().top   // return a dom rect give information about the size and position of an element
      console.log(boxtop)
        if(boxtop < triggerBottom){
        box.classList.add('show')}
        else{
            box.classList.remove('show')
        }
    })
}