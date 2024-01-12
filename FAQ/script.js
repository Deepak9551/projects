// -bring in toggle button(queryselector all)
// -loop throught nodelist (forEach)
// -add click event (addEventListner)
// -toggle the active class on the parent node (. aprentnode & classlist.toggle())

const toggle = document.querySelectorAll('.faq-toggle')
toggle.forEach(toggle =>{
    toggle.addEventListener('click',()=>{
        toggle.parentNode.classList.toggle('active')
    })
})