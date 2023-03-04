let Student = {
    name: "abc",
    address: {
        street: "1 dumpling street, cape town",
        country: "South Africa"
    }
}

let Student1 = Object.assign({}, Student) // Object.assign is shallow copy

Student.address.country = "SA"

console.log(JSON.stringify(Student))
console.log(JSON.stringify(Student1))