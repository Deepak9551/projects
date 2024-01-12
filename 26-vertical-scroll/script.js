const slidercontainer =document.querySelector('.slider-container')
const slideRight=document.querySelector('.right-slide')
const slideLeft=document.querySelector('.left-slide')
const upButton =document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength= slideRight.querySelectorAll('div').length
 
let activeslideindex=0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click',() => changeslide('up'))
downButton.addEventListener('click', ()=>changeslide('down'))
const changeslide = (direction) =>{
    const sliderHeight =slidercontainer.clientHeight
    // console.log(sliderHeight)
    if(direction === 'up'){
        activeslideindex++
        if(activeslideindex > slidesLength -1){
            activeslideindex = 0
        }
    } else if(direction === 'down'){
        activeslideindex--
        if(activeslideindex < 0){
            activeslideindex = slidesLength - 1
        }
    }
    slideRight.style.transform = `translateY(-${activeslideindex * sliderHeight}px)`

    slideLeft.style.transform =`translateY(${activeslideindex * sliderHeight}px)`

}