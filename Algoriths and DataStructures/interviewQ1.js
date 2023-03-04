//inefficient Method O(n**2)

function itemsInCommon(arr1, arr2){
    for(let i = 0; i<arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){
            if(arr1[i] === arr2[j])return true
        }
    }
    return false
}
//efficient method, O(n)
function itemInCommon(arr1, arr2){
    let obj = {}
    for (let i = 0; i < arr1.length; i++){
        obj[arr1[i]] = true
    }
    for(let j = 0; j < arr2.length; j++){
        if(obj[arr2[j]]) return true
    }
    return false
}

let array1 = [1, 3, 5]
let array2 = [2, 4, 6]

console.log(itemInCommon(array1, array2))