/**
 * Block-scoped variables can now be created with the "let" keyword.
 */

const a = [10, 20, 30];

for (let i in a) {
    console.log(i, a[i]);
}

/**
 * Above code prints out
 *
 * 0 10
 * 1 20
 * 2 30
 */

console.log(i); // throws a ReferenceError: i is not defined
