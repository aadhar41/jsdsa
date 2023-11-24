// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// const reverseString = (str) => (str.split('').reverse().join(''));

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        const element = str[i];
        reversed += (element);
    }
    return reversed;
}

module.exports = reverseString;