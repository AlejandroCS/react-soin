const operations = require('./suma')

const resultados = `El resulatado de sumar: ${operations.suma(2, 4)}`

console.log(resultados)
console.log('Resultado multiplicar:', operations.multiplicar(2, 4))
console.log('Resultado dividir:', operations.multiplicar(4,2, true))
