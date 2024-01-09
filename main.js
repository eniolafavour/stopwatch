let timerDisplay = document.getElementById ("timerDisplay") 
let startButton = document.getElementById ("startButton")
let resetButton = document.getElementById ("resetButton")
let stopButton = document.getElementById ("stopButton")

let milisecond = 0
let second = 0
let minute = 0
let timer = null

startButton.addEventListener("click", function () {
    if (timer !== null) {clearInterval(timer)}
    timer = setInterval(startTimer,10)
}
) 

stopButton.addEventListener("click", function () {
    clearInterval(timer)
}) 

resetButton.addEventListener("click", function () {
    clearInterval(timer)
    timerDisplay.innerHTML = `00 : 00 : 00`
    milisecond = second = minute = 00
}) 

function startTimer () {
    milisecond++
    if (milisecond == 100) {
        milisecond = 0
        second++
        if (second == 60) {
            second = 0
            minute++
        }
    } 
    let milisecondString = milisecond < 10 ? `0${milisecond}` : milisecond
    let secondString = second < 10 ? `0${second}` : second
    let minuteString = minute < 10 ? `0${minute}` : minute
    
    timerDisplay.innerHTML = `${minuteString} : ${secondString} : ${milisecondString}`

}