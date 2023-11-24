const helloWorld = require('./hello-world');

test("Return 'Hello, World! as a string", () => {
    const result = helloWorld();
    expect(result).toBe("Hello World!");
})