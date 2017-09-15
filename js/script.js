// Query Selectors
const pause = document.querySelector('.btn-danger')
const resume = document.querySelector('.btn-success')
const shortTimer = document.querySelector('.short-timer')
const medTimer = document.querySelector('.med-timer')
const longTimer = document.querySelector('.long-timer')
const display = document.querySelector('.display')

// Moment Variables
let fiveMin = moment.duration(5, 'minutes')
let twentyFiveMin = moment.duration(25, 'minutes')
let sixtyMin = moment.duration(60, 'minutes')

// Interval Variables
let interval;
let isPaused = false

// Leftpad Function
const leftpad = (val) => {
  if(val < 10) {
    return `0${val}`
  }
  return val
}

// Pause Button
pause.addEventListener("click", function(){
    isPaused = true
});

// Resume Button
resume.addEventListener("click", function(){
    isPaused = false
});

// 5min Button
shortTimer.addEventListener("click", function(){
  let timer = fiveMin
  isPaused = false
  startInterval(timer)
});

// 25min Button
medTimer.addEventListener("click", function(){
  let timer = twentyFiveMin
  isPaused = false
  startInterval(timer)
});

// 60min Button
longTimer.addEventListener("click", function(){
  let timer = sixtyMin
  isPaused = false
  startInterval(timer)
});

// Set Interval Function
startInterval = (timer) => {
  clearInterval(interval)
  interval = setInterval(function(){
    if(!isPaused){
      display.innerHTML = `<h1>${leftpad(timer.get('minutes'))}:${leftpad(timer.get('seconds'))}</h1>`
      timer.subtract(1, 'second')
    }
  }, 1000)
}
