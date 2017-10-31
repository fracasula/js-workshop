/**
 * Binary and Octal literals
 */

console.log(0b111110111 === 503)
console.log(0o767 === 503)

/**
 * Same with ES5
 */

console.log(parseInt('111110111', 2) === 503)
console.log(parseInt('767', 8) === 503)
