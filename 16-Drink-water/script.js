const smallcups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
smallcups.forEach((cup,idx)=>{
    // console.log(idx)
    cup.addEventListener('click',()=>highlightcups(idx))
})
function highlightcups(idx){
 if(smallcups[idx].classList.contains('full')&& !smallcups[idx].nextElementSibling.classList.contains('full') ){
     idx--
}

    // console.log(idx)
    smallcups.forEach((cup,idx2)=>{
        if(idx2<=idx){
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full')
        }
    })


    updatebigcup()
}
function updatebigcup(){
    const fullcups = document.querySelectorAll('.cup-small.full').length
    const totalcups = smallcups.length
    // console.log(fullcups)
    // console.log(smallcups)
    if(fullcups===0){
        percentage.style.visibility='hidden'
        percentage.style.height=0
    }
    else{
        percentage.style.visibility='visible'
        percentage.style.height=`${fullcups/totalcups*330}px`
        percentage.innerText=`${fullcups /totalcups*100}%`
    }
    if(fullcups === totalcups){
        remained.style.visibility='hidden'
        remained.style.height =0
    }
    else{
        remained.style.visibility='visible'
        liters.innerText=`${2-(250*fullcups/1000)}`
    }
}
 