function factorial(n){
    if(n === 1)return 1
    return n * factorial(n-1)
}

console.log(factorial(8))

/**
 * 4!                   factorial(4) = 24
 * 4 * 3!               return 4 * factorial(3) = 4 * 6 =  24
 *     3 * 2!           return 3 * factorial(2) = 3 * 2 = 6
 *         2 * 1!       return 2 * factorial(1) = 2 * 1 = 2
 *             1        return 1
 */