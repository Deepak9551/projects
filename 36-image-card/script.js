const imgs =document.getElementById('imgs')
const leftBtn =document.getElementById('left')
const reightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

console.log(img)

let idx=0
let intervel =setInterval(run,2000)

function run(){
    idx++

    changeImage()
}

function changeImage(){
    if(idx>img.length){
        idx = 0
    }
    else if(idx < 0){
        idx =img.length -1
    }

    imgs.style.transform =`translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(intervel)
    intervel =setInterval(run,2000)
}
reightBtn.addEventListener('click' , () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click',()=>{
    idx-- 
    changeImage()
    resetInterval()
})