var trap = function (height) {
  let totalWater = 0;
  for (let i = 0; i < height.length; i++) {
    let lefti = i;
    let righti = i;
    let maxL = 0;
    let maxR = 0;
    while(lefti >= 0){
        maxL = Math.max(maxL,height[lefti])
        lefti--;
    }
    while(righti < height.length){
        maxR = Math.max(maxR, height[righti])
        righti++;
    }
    const currentWater = Math.min(maxL, maxR) - height[i]
    if(currentWater >= 0) totalWater += currentWater
  }
  return totalWater;
};

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
