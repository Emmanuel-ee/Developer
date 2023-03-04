const findTwoSum = function(arr, sum){
    let pairs = []
    let numlist = [];

    for(let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        let diff = sum - currNum;
        if(numlist.includes(diff)){
            pairs.push([currNum, diff]);
        }
        numlist.push(currNum);
    }
    return pairs;

}

let num = 10

let arr = [1,2,3,4,5,6,7,8,9]

console.log(findTwoSum(arr, num))