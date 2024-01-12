const hourEl =document.querySelector('.hour')
const minuteEl =document.querySelector('.minute')
const secondEl =document.querySelector('.second')
const timeEl =document.querySelector('time')
const dateEl =document.querySelector('.date')
const toggleEl =document.querySelector('.toggle')

const days=["sunday","monday","tuesday","wednesday","thrusday","friday","saturday"]
const months = ["jan","feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
 
toggleEl.addEventListener('click',(e)=>{
    const html =document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
    e.target.innerHTML = 'Dark Mode'
}else{
    html.classList.add('dark')
    e.target.innerHTML='Light Mode'

}
        
})
function SetTime(){
    const time = new Date();
    const month =time.getMonth()
    const day = time.getDate()
    const hour =time.getHours()
    const hourforclock = hour % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hour >= 12 ? 'PM' : 'AM'

    hourEl.style.transform =`translate(-50%,-100%) rotate(scale(hourforclock,0,11,0,360)}deg)`
    hourEl.style.transform =`translate(-50%,-100%) rotate(${scale(hourforclock,0,599,0,360)}deg)`
    hourEl.style.transform =`translate(-50%,-100%) rotate(${scale(hourforclock,0,50,0,360)}deg)`
    timeEl.innerHTML =`${hourforclock}:${minutes <10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl = `${days[day]},${months[month]}} <span circle="circle">${date}</span>`
    
}
const scale=(num, in_Min, in_Max, out_Min, out_Max) => {
    return (num - in_Min) * (out_Max - out_Min) / (in_Max - in_Min) + out_Min;
}
SetTime()
setInterval(SetTime,1000)