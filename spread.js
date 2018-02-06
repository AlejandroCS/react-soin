const arr1 = ['arroz', 'frijoles']
const arr2 = ['pan', 'queso', 'frijoles']

const union = [...arr1, ...arr2]

// Ejemplo array
console.log(union)

const goku = { name: 'Goku', race: 'saiyajin' }
const vegeta = { name: 'Vegeta', race: 'saiyajin realeza' }
const fusion = { ...goku, ...vegeta, name: 'Vegetto' }
console.log(fusion)

