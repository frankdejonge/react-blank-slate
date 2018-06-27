let output = [1,2,3].reduce((total = 0, number) => total + number, undefined);
console.log(output);





function reduce(reducer, input) {
    return input.reduce(reducer, undefined);
}

const input = [
    { operation: 'add', value: 10 },
    { operation: 'divide', value: 2 },
    { operation: 'multiply', value: 5 },
];

function calculator(state = 0, action) {
    switch (action.operation) {
        case 'add':
            return state + action.value;
        case 'divide':
            return state / action.value;
        case 'multiply':
            return state * action.value;
        default:
            return state;
    }
}

console.log(reduce(calculator, input));



