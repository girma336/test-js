// const { expect } = require('code');
const reverseString = require('./reverseString.js');

test('Check the reverse of string', () => {
    expect(reverseString("Girma")).toMatch("amriG");
})