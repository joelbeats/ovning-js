let display = document.getElementById('counter')
let plus = document.getElementById('increase')
let minus = document.getElementById('decrease')

let count = 0

updateDisplay()

plus.addEventListener('click', function () {
  count++
  updateDisplay()
})

minus.addEventListener('click', function () {
  count--
  updateDisplay()
})


function updateDisplay() {
  console.log('update ran')
  display.innerHTML = count
}