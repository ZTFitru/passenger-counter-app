
let count = 0;

let countEl = document.getElementById('count-el')
let saveEl = document.getElementById('save-el')
let incrementBtn = document.querySelector('#increment-btn')
let saveBtn = document.querySelector('#save-btn')
let resetBtn = document.querySelector('#reset-btn')

incrementBtn.addEventListener('click', increment)
saveBtn.addEventListener('click', save)
resetBtn.addEventListener('click', resetCount)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let savedText = count + ' - '
    saveEl.textContent += savedText
    countEl.textContent = 0
    count = 0
}

function resetCount() {
    count = 0
    saveEl.textContent = 'Previous entires: '
}