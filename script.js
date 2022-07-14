function timer () {
let timerNumber = document.querySelector('.timerNumber')
let seconds = 0
let timer;

function transformSecondsInHour (second) {
    const date = new Date(second * 1000)
    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

function startTimer () {
    timer = setInterval(() => {
        seconds++
        timerNumber.textContent = transformSecondsInHour(seconds)
    }, 1000)
}

document.addEventListener('click', (event) => {
    let element = event.target
    let pauseButton = document.querySelector('.pause')

    if (element.classList.contains('reset')) {
        timerNumber.classList.remove('paused')
        pauseButton.classList.remove('paused')
        clearInterval(timer)
        seconds = 0
        timerNumber.textContent = transformSecondsInHour(seconds)
    }

    if (element.classList.contains('start')) {
        timerNumber.classList.remove('paused')
        pauseButton.classList.remove('paused')
        clearInterval(timer)
        startTimer()
    }

    if (element.classList.contains('pause')) {
        timerNumber.classList.add('paused')
        pauseButton.classList.add('paused')
        clearInterval(timer)
    }

})
}
timer()