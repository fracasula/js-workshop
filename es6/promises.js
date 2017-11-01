/**
 * Promises support to avoid callbacks hell
 */

const asyncCall = foo => new Promise(resolve => {
    setTimeout(
        () => resolve([foo, 'world']),
        1000
    )
})

asyncCall('hello')
    .then(([var1, var2]) => {
        console.log(var1, var2) // hello world

        return asyncCall('ciao')
    })
    .then(([var1, var2]) => {
        console.log(var1, var2) // ciao world
    })
