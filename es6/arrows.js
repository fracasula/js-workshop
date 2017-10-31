/**
 * Arrow functions offer a shorter syntax for closures
 */

const singleParamArrow = x => {
    const a = [1, 2, 3];

    for (let i in a) {
        x += a[i];
    }

    return x;
};

console.log(singleParamArrow(10)); // prints 16

// // // // // // // // // // // // // // // // // // // //

const doubleParamArrow = (x, y) => {
    return x + y;
};

console.log(doubleParamArrow(5, 15)); // prints 20

// // // // // // // // // // // // // // // // // // // //

const shorterDoubleParamArrow = (x, y) => x + y;

console.log(shorterDoubleParamArrow(5, 15)); // prints 20
