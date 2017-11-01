/**
 * Iteration with classic for..in and for..of
 */

const a = [1, 2, 3]

for (let i in a) {
    console.log(i) // 0 1 2
}

for (let i of a) {
    console.log(i) // 1 2 3
}
