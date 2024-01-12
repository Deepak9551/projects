const Buttons =document.querySelectorAll('.ripple')
Buttons.forEach(button =>{
    button.addEventListener('click',function (e){
    const x =e.clientX
    const y =e.clientY    //location in x and y direction
    // console.log(x,y)
    const buttontop =e.target.offsetTop
    const buttonleft =e.target.offsetLeft
    // console.log(buttontop,buttonleft)

    const XInside = x - buttonleft
    const YInside = y - buttontop
    // console.log(XInside,YInside)

    const circle =document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = YInside + 'px'
    circle.style.left = XInside + 'px'

    this.appendChild(circle)

    setTimeout(()=>circle.remove(),500)
    })
})