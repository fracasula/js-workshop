/**
 * Simple class inheritance
 */

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}

const rect = new Rectangle('r1', 100, 150, 200, 250)

console.log(rect) // Rectangle { id: 'r1', x: 100, y: 150, width: 200, height: 250 }

/**
 * Static methods and getters/setters
 */

class Person {
    constructor() {
        this._firstName = 'John'
        this._lastName = 'Doe'
    }

    fullName() {
        return `${this._firstName} ${this._lastName}`
    }

    static foo() {
        return 'bar'
    }

    get firstName() {
        return this._firstName
    }

    set firstName(name) {
        this._firstName = name
    }
}

const p = new Person()

console.log(p.fullName()) // John Doe
console.log(p.firstName) // John

p.firstName = 'Mike'
console.log(p.firstName) // Mike

console.log(Person.foo()) // bar


