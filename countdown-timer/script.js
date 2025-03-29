const daysEl = document.querySelector('#days')
const hourEl = document.querySelector('#hours')
const minEl = document.querySelector('#mins')
const secEl = document.querySelector('#seconds')

const newYears = '1 Jan 2026'

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600 % 24)
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    console.log(days,hours,mins,seconds)
    daysEl.innerHTML = formatTime(days)
    hourEl.innerHTML = formatTime(hours)
    minEl.innerHTML = formatTime(mins)
    secEl.innerHTML = formatTime(seconds)

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time
}

setInterval(countDown, 1000)


