const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')

function setTime(hr, mn, sc) {
  let day = new Date()
  let hh = day.getHours() * 30
  let mm = day.getMinutes() * 6
  let ss = day.getSeconds() * 6
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`
}

setTime(hr, mn, sc)

setInterval(() => {
  setTime(hr, mn, sc)
}, 1000)
