// variables primitivos strings, numbers and booleans
// no guardan referencia de asignacion

console.log('Ejemplo con numeros')
let age = 100;
const age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

console.log('Ejemplo con string')
let name = 'Wes';
let name2 = name;
console.log(name, name2);
name = 'wesley';
console.log(name, name2);

// Ahora, si tenemos un array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// y lo "copiamos"
const team = players;
console.log(players, team);
// Si hacemos algo como esto: :
team[3] = 'Lux';
// que pasa cuando actualizamos el array?
// este nos crea un problema!
// porque estamos modificando el array original tambien!
// Porque? Porque hicimos una asignacion referenciada. Son el mismo array!

// Entonces como solucionamos esto? Hay mecanismos para hacer copias!
const team2 = players.slice();

// o creando un nuevo array y concatenandolo el viejo
const team3 = [].concat(players);

// usando los Spreads de ES6
const team4 = [...players];
team4[3] = 'heeee hawww';

console.log(team4);

const team5 = Array.from(players);
// ahora cuando cambiamos, el original no se actualiza


// Lo mismo con los Objetos
// with Objects
const person = {
  name: 'Wes Bos',
  age: 80
};

// si hacemos una copia este es referenciado:
// const captain = person;
// captain.number = 99;
// console.log(captain);

// Como copiar sin referencia?
const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

// Tambien con ES6 object ...spread
const cap3 = {...person};
console.log(cap3);
