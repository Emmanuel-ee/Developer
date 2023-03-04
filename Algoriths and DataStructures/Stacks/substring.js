function findValidSubstrings(k) {
    const result = [];
    let i = 0;
    while (i < k.length - 2) {
      if (k[i] === k[i + 1] && k[i + 1] === k[i + 2]) {
        let j = i + 2;
        while (j < k.length && k[j] === k[i]) {
          j++;
        }
        result.push([i, j - 1]);
        i = j - 1;
      } else {
        i++;
      }
    }
    return result;
  }
  
  console.log(findValidSubstrings("abcdddeeeeaabbbcd"))