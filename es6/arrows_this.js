/**
 * Arrow functions do not construct new objects like "function"
 */

class Test {
    constructor() {
        this.a = 1
        this.b = 2
    }

    sumArrow() {
        const arrow = () => {
            // "this" here points to the closest object surrounding the arrow function
            // which would be an instance of the Test class
            return this.a + this.b
        }

        return arrow()
    }

    sumFunc() {
        const func = function () {
            // func doesn't even point to an object since it's an anonymous function
            // so in this case "this" is undefined
            // TypeError: Cannot read property 'a' of undefined
            return this.a + this.b
        }

        return func()
    }
}

const t = new Test()

console.log(t.sumArrow()) // prints 3
// console.log(t.sumFunc()) // would throw an error on "return this.a + this.b" (line 26)

/**
 * This time we'll be using "function" to construct instances of "Person"
 */

function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0

    this.arrowGrowUp = () => ++this.age

    this.anonymousGrowUp = function () {
        return ++this.age
    }

    setTimeout(function wrongCode() {
        // this isn't an anonymous function so "this" here does not point
        // to the Person instance thus we won't change the expected "age"
        this.age++
    }, 1)
}


const p = new Person()

const waitTill = new Date(new Date().getTime() + 2)
while (waitTill > new Date()) {
    // waits two milliseconds
}

console.log(p.arrowGrowUp()) // prints 1
console.log(p.anonymousGrowUp()) // prints 2
