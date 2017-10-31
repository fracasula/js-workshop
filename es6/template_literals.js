/**
 * Backticks string interpolation
 */

const lunch = {
    starter: 'prosciutto & melone',
    firstCourse: 'fettuccine alla boscaiola',
    secondCourse: 'pollo alla diavola',
    side: 'cicoria ripassata',
    dessert: 'tiramisú',
    coffee: 'double espresso',
    ammazzacaffe: 'nocino'
}

console.log(
    `I love ${lunch.dessert}`
    // prints "I love tiramisú"
)

/**
 * Custom interpolation
 */

const test = (strings, language, adjective) =>
    `${language}${strings[1]}${adjective}${strings[2]}`

const lang = 'JavaScript', adj = 'weird'

console.log(
    test`${lang} is a ${adj} language`
    /**
     * strings: [ '', ' is a ', ' language' ],
     * language: 'JavaScript',
     * adjective: 'weird'
     */
)

/**
 * Multiline strings with backticks
 */

console.log(`
    hello this is a
    multiline
    string
`)
