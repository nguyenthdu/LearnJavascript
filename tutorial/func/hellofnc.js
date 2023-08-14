/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function(...args) {
        console.log('Hello World')
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
const f = createHelloWorld();
f({}, null, 42); // "Hello World"