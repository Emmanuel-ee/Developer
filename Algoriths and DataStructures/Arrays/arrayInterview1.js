/**const findTwoSum = function(nums, target){
    for (let i = 0; i < nums.length; i++){
        const numberToFind = target - nums[i]
        for (j = i+1; j < nums.length; j++){
            if(numberToFind === nums[j]){
                return[i, j]
            }
        }
    }
    return null
} **/

//Optimised Code

const findTwoSum = function(nums, target){
    const numsMap ={};
    for (let i = 0; i < nums.length; i++){
        const currentMapVal = numsMap[nums[i]];
        if(currentMapVal > 0){
            return[currentMapVal, i];
        } else{
            const numberToFind = target - nums[i]
            numsMap[numberToFind] = i
        }
    }
    return null;
}

console.log(findTwoSum([1,2,3,4,5,6,], 7))