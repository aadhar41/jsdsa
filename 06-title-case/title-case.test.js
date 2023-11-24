const titleCase = require('./title-case');

test('Find the maximum number in an array', () => {
    expect(titleCase("hello world")).toBe("Hello World");
    expect(titleCase("javascript programming")).toBe("Javascript Programming");
    expect(titleCase("openai chatbot")).toBe("Openai Chatbot");
});