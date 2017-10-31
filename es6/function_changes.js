/**
 * Simple and intuitive default values for function parameters
 */

function test(x, y = 10, z = 15) {
    return x + y + z
}

const test2 = (x, y = 10, z = 15) => x + y + z

console.log(test(5)) // prints 30
console.log(test2(5)) // prints 30

/**
 * Rest parameter
 */

const rest = (a, b, ...c) => a + b + c.length

console.log(rest(10, 2, 8, 10, 5, 5)) // prints 16

const rest2 = (...a) => a.reduce((sum, value) => sum + value)

console.log(rest2(1, 3, 6, 5, 15)) // prints 30

/**
 * Spread operator
 */

const cats = ['siamese', 'persian']
const felines = ['tiger', 'jaguar', ...cats]

console.log(felines) // prints [ 'tiger', 'jaguar', 'siamese', 'persian' ]

const hello = 'ciao'

console.log(...hello) // prints c i a o
