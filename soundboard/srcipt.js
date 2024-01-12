const sounds =['applause','boo','gasp','tada','success','wrong']


sounds.forEach((sound) => {
    const btn =document.createElement('button') // create a button for each element
    btn.classList.add('btn') //button class add +btn
    btn.addEventListener('click',()=>{
        stopsongs()
        document.getElementById(sound).play()
    })
btn.innerText = sound
document.getElementById('button').appendChild(btn)
})
function stopsongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime=0

    })
}