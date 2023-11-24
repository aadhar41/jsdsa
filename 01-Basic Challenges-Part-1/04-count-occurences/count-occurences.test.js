const countOccurrences = require('./count-occurences');

test('Count occurrences of a character', () => {
    expect(countOccurrences('hello', 'l')).toBe(2);
    expect(countOccurrences('programming', 'm')).toBe(2);
    expect(countOccurrences('banana', 'a')).toBe(3);
});