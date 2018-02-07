const inventors = [
  {
    first: 'Albert', last: 'Einstein', year: 1879, passed: 1955,
  },
  {
    first: 'Isaac', last: 'Newton', year: 1643, passed: 1727,
  },
  {
    first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642,
  },
  {
    first: 'Marie', last: 'Curie', year: 1867, passed: 1934,
  },
  {
    first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630,
  },
  {
    first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543,
  },
  {
    first: 'Max', last: 'Planck', year: 1858, passed: 1947,
  },
  {
    first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979,
  },
  {
    first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852,
  },
  {
    first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905,
  },
  {
    first: 'Lise', last: 'Meitner', year: 1878, passed: 1968,
  },
  {
    first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909,
  },
];

// Array.prototype.filter()
// 1. Filtrar la lista de inventores que nacieron en 1500 ó más y menos del año 1700
const born = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1700)).map(inventor => `Nombre: ${inventor.first}`);
// console.log(born)

// Array.prototype.map()
// 2. Recorrer todo el array de inventores y devolver un nuevo array con nombre y apellido
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullNames)

// Array.prototype.sort()
// 3. Ordenar el arreglo de inventores para que quede de mayor a menor
const ordered = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
// console.log(ordered)

// Array.prototype.reduce()
// 4. Realizar una suma del total de edades de los inventores
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year), 0);
console.log(totalYears);

// Array.prototype.find()
// 5. Encontrar el primer valor que sea mayor a 10
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);
