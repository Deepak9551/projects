const nums =document.querySelectorAll('.nums span')
const counter =document.querySelectorAll('.counter')
const finalMessage =document.querySelector('.final')
const replay =document.querySelector('#replay')
runAnimation()


function resetDOM(){
    counter.classList.remove('hide')
    finalMessage.classList.remove('show')
    
    nums.forEach((num) =>{
        num.classList.value =''
    })
    num[0].classList.add('in')
}
function runAnimation(){
    nums.forEach((num, idx) => {
        const nextToLast = num.length - 1

        num.addEventListener('animationend',(e)=>{
            if(e.animationName === 'goin' && idx !== nextToLast){
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goout' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in');
            } else {
                counter.classList.add('hide')
              finalMessage.classList.add('show')
            }
        })
        // console.log(num,idx)
    })
}

replay.addEventListener('click' ,()=>{
    resetDOM()
    runAnimation()
})