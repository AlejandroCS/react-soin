const chalk = require('chalk');

const { suma, resta, multiplicar } = require('./operations');

const resultados = `El resulatado de sumar: ${suma(2, 4)}`;

console.log(resultados);
console.log('Resultado multiplicar:', multiplicar(2, 4));
console.log('Resultado dividir:', multiplicar(4, 2, true));
console.log('Resultado restar:', resta(4, 2));

// Object/Array destructuring assignment === extraer elementos que necesito
const [a, b] = ['Hello', 'Jhon'];
console.log(a);
console.log(b);

const { name } = { name: 'Max', age: 28 };
console.log(name);

const { age: ageMax } = { name: 'Max', age: 28 };
console.log(ageMax);

console.log(chalk.blue('Hello world!'));
