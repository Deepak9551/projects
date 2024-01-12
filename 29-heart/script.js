const LoveMe = document.querySelector('.LoveMe')
const times = document.querySelector('#times')
let clicktime = 0
let timesclicked =0
LoveMe.addEventListener('click',(e)=>{
    if(clicktime === 0){
        clicktime =new Date().getTime()
    }
    else {
        if((new Date().getTime() - clicktime) < 800){
                // console.log(123)
            createHeart(e)
            clicktime = 0
        }else{
            clicktime =new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const leftOffset =e.target.letOffset
    const topOffset = e.target.topOffset

    const xInside = x - leftOffset                                                                                                                                                       
    const yInside = y - topOffset

    heart.style.top =`${yInside}px`
    heart.style.left=`${xInside}px`

    LoveMe.appendChild(heart)
    times.innerHTML = ++timesclicked

    setTimeout(() => heart.remove(),5000)
    console.log(x,y)

    console.log(xInside, yInside)
}