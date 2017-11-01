/**
 * Property shorthand
 */

const name = 'John'

const user = {
    name // same as doing name: name
}

console.log(user) // { name: 'John' }

/**
 * Computed property names
 */

const obj = {
    ['key_' + (100 + 20 + 3)]: 'my value'
}

console.log(obj) // { key_123: 'my value' }

/**
 * Method properties
 */

const methods = {
    sum (a, b) { // used to be sum: function (a, b) {
        return a + b
    },
    *even(nums) { // no equivalent in ES5
        for (let num of nums) {
            if (num % 2 === 0) {
                yield num
            }
        }
    }
}

for (let num of methods.even([1, 2, 3, 4, 5, 6])) {
    console.log(num) // 2 4 6
}

// or with the spread operator...

const evenNumbers = [ ...methods.even([1, 2, 3, 4, 5, 6]) ]

console.log(evenNumbers) // [ 2, 4, 6 ]
