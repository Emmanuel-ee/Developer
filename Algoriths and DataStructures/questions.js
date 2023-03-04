/**function highestArea(array) {
    let Maxarea = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        newArea = Math.min(array[i], array[j]) * (j - i);
        Maxarea = Math.max(newArea, Maxarea);
      }
    }
    return Maxarea;
  }
  console.log(highestArea([7, 1, 2, 3, 9]));

  **/

const getMaxWaterContainer = function (heights) {
    let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;
    while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= height[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};
