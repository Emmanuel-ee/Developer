// const randomIntger = Math.floor(Math.random()*10)+1
// console.log(randomIntger)
// 



const namesString = "Angela, Ben, Jenny, Michael, Chloe"
const names = namesString.split(", ")

let person = names[Math.floor(Math.random()*names.length)]
console.log(`${person} is going to buy the meal today!`)