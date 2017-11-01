/**
 * Destructuring with Array matching
 */

let list = [1, 2, 3];
let [a, , b] = list;
[b, a] = [a, b];

console.log(a, b) // 3 1

/**
 * Destructuring with Object matching
 */

const getSpells = () => ({
    abjuration: ['Absorb Elements', 'Aid', 'Antimagic Field'],
    necromancy: ['Animate Dead', 'Astral Projection'],
    enchantment: ['Animal Friendship', 'Animal Messenger', 'Bane']
})

const {necromancy, abjuration: { 1: aid }} = getSpells()

console.log(necromancy) // [ 'Animate Dead', 'Astral Projection' ]
console.log(aid) // Aid

/**
 * Destructuring with default values
 */

let spellsDamage = { fireball: 100 }
let { fireball, shock = 50 } = spellsDamage

console.log(fireball, shock) // 100 50

let spells = ['fireball', 'shock']
let [s1, s2, s3 = 'poisonous dart'] = spells

console.log(s1, s2, s3) // fireball shock poisonous dart

/**
 * Destructuring with function parameters
 */

const f1 = ([name, val]) => `${name}=${val}`

const f2 = ({name, val}) => `${name}=${val}`

console.log(f1(['mainCourse', 'pizza'])) // mainCourse=pizza
console.log(f2({name: 'mainCourse', val: 'pizza'})) // mainCourse=pizza
