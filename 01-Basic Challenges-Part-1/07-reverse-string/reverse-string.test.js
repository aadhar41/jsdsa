const reverseString = require('./reverse-string');

test('Reversing a string', () => {
    expect(reverseString('Hello')).toBe('olleH');
    expect(reverseString('Javascript')).toBe('tpircsavaJ');
    expect(reverseString('12345')).toBe('54321');
});