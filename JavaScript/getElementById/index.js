let saveEl = document.getElementById("save-el")
let head = document.getElementById("number")
count =  0

console.log(saveEl)

function increment(){
    count += 1
    head.innerText = count
}

function subtract(){
    count -= 1
    head.innerText = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    head.textContent = 0
    count = 0
}
