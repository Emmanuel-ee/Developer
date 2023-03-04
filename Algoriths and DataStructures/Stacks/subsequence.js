function maxIncreasingSubsequence(sequence) {
  const n = sequence.length;
  const dp = new Array(n).fill(1); // Initialize dp array with 1's
  let k = 1;

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[i] > sequence[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    k = Math.max(k, dp[i]);
  }

  return k;
}

const sequence = [5, 19, 5, 81, 50, 28, 29, 1, 83, 23];
const maxLen = maxIncreasingSubsequence(sequence);
console.log(maxLen); // Output: 5
