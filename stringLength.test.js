// const { expect } = require('code')
const stringLength = require('./stringLength.js')

test('Test the length os string', () => { 
 expect(stringLength("girma")).toBe(5);
});

test('Test the length os string when empty string', () => { 
    expect(() => stringLength("")).toThrow();
   });

test('Test the length os string', () => { 
    expect(() => stringLength("Girma Tarekegn")).toThrow();
   });
