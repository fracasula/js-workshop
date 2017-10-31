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
            return this.a + this.b;
        }

        return arrow()
    }

    sumFunc() {
        const func = function() {
            return this.a + this.b
        }

        return func()
    }
}

const t = new Test()

console.log(t.sumArrow()) // prints 3
console.log(t.sumFunc()) // throws an error on "return this.a + this.b" (line 21)

/**
 * That happens because with "function" we can also create objects so sometimes
 * they work as constructors as shown below
 */

function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0
    this.growUp = () => ++this.age
}

const p = new Person()

console.log(p.growUp()) // prints 1
console.log(p.growUp()) // prints 2
