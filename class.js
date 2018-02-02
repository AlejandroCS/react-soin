
const Person = require('./Person')

const person = new Person()
console.log('Name', person.name)
person.setName('Francisco')
console.log('Name', person.name)
console.log('Name', person.species)