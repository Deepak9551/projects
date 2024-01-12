const resultEL =document.getElementById('result')
const lengthEL =document.getElementById('length')
const uppercaseEL =document.getElementById('uppercase')
const lowercaseEL =document.getElementById('lowercase')
const numberEL =document.getElementById('numbers')
const symbolsEL =document.getElementById('symbols')
const clipboardEL = document.getElementById('clipboard')
const generateEL =document.getElementById('generate')


const RandomFunction ={
    lower: getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbols
}

clipboardEL.addEventListener('click' ,()=>{
    const textarea =document.createElement('textarea')
    const password = resultEL.innerText
    
    if(!password){ return } 

    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select() //select evert thing on text area
    document.execCommand('copy')
    textarea.remove()
    alert('password copy to clipboard')

  
})

generateEL.addEventListener('click',()=>{
    const length = +lengthEL.value
    const hasLower =lowercaseEL.checked
    const hasUpper = uppercaseEL.checked
    const hasNumber = numberEL.checked
    const hasSymbols= symbolsEL.checked
    // console.log( length,hasLower,hasUpper,hasNumber,hasSymbols)

    resultEL.innerText =generatePassword(hasLower,hasUpper,hasNumber,hasSymbols,length)
})

function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword =''
    const typesCount = lower + upper + number + symbol
    // console.log(typesCount)  give how many letter

    const typeArr =[{lower},{upper},{number},{symbol}].
    filter(item => Object.values(item)[0]) //filter true item in object
    
    // console.log(typeArr) actual give letter type

    if(typesCount === 0){
        return ''
    }

    for(let i =0; i< length; i += typesCount){
        typeArr.forEach(type =>{
        const funcName= Object.keys(type)[0]
        generatedPassword += RandomFunction[funcName]()
        })
    
    const finalPassword = generatedPassword.slice(0,length)
return finalPassword
}
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
// console.log(getRandomLower())

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} 
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbols(){
    const symbols ='!@#$%^&*(){}[]=<>/,.'
    return symbols[0]
} 

// console.log(getRandomSymbols())