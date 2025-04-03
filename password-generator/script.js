const pwEl = document.querySelector('#pw')
const copyEl = document.querySelector('#copy')
const upperEl = document.querySelector('#upper')
const lenEl = document.querySelector('#len')
const lowerEl = document.querySelector('#lower')
const numberEl = document.querySelector('#number')
const symbolEl = document.querySelector('#symbol')
const generateEl = document.querySelector('#generate')
console.log(len.value)

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_-+="


function getUpperCase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]
}

function getLowerCase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)]
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)]
}


function generatePassword(){
    const len = lenEl.value
    console.log(len)

    let password = ""

    for (let i=0; i < len; i++){
        const x = generateX()
        password += x
    }

    pwEl.innerHTML = password
}

function generateX(){
    const xs = []

    if(upperEl.checked){
        xs.push(getUpperCase())
    }

    if(lowerEl.checked){
        xs.push(getLowerCase())
    }

    if(numberEl.checked){
        xs.push(getNumber())
    }

    if(symbolEl.checked){
        xs.push(getSymbol())
    }

    return xs[Math.floor(Math.random() * xs.length)]

}

// generateEl.addEventListener('click', generatePassword())

generateEl.addEventListener('click', generatePassword)

copyEl.addEventListener('click', (e) => {
    const textarea = document.createElement('textarea')
    const password = pwEl.innerHTML

    if (!password){
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert('Password copied to clipboard')
})
