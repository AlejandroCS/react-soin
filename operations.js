const suma = (num1, num2) => num1 + num2;

const division = (num, num2) => num / num2;

const multiplicar = (num1, num2, dividir = false) => {
  if (dividir) {
    return division(num1, num2);
  }
  return num1 * num2;
};

const resta = (num, num2) => num - num2;

const cuadrado = num => num * num;

module.exports = {
  suma,
  multiplicar,
  resta,
  cuadrado,
};
