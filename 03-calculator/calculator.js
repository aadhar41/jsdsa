function calculator(num1, num2, operator) {
    let result;

    // switch (operator) {
    //     case '+':
    //         result = num1 + num2;
    //         break;
    //     case '-':
    //         result = num1 - num2;
    //         break;
    //     case '*':
    //         result = num1 * num2;
    //         break;
    //     case '/':
    //         result = num1 / num2;
    //         break;
    
    //     default:
    //         throw new Error("Invalid Operator");
    // }

    if (operator === '+') {
        result = num1 + num2;
    } else if(operator === '-') {
        result = num1 - num2;
    } else if(operator === '*') {
        result = num1 * num2;
    } else if(operator === '/') {
        result = num1 / num2;
    } else {
        throw new Error("Invalid Operator");
    }

    return result;
}

module.exports = calculator;