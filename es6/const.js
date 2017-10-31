/**
 * Think of constants in JavaScript more like fixed-type variables
 * rather than immutable variables since their content can still
 * change but not their type.
 */

const user = {
    firstName: 'John',
    lastName: 'Doe'
}

user.firstName = 'Michael' // this is fine, we're not changing the "user" type
user = 123 // this will throw a TypeError as we're changing "user" to be a Number now
