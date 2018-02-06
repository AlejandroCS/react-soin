const suma = (num1, num2) => {
  return num1 + num2
}

const multiplicar = (num1, num2, dividir = false) => {
  if (dividir) {
    return division(num1, num2)
  }
  return num1 * num2
}

const division = (num, num2) => {
  return num / num2
}

const resta = (num, num2) => {
  return num - num2
}

const cuadrado = (num) => {
  return num * num
}

module.exports = {
  suma,
  multiplicar,
  resta,
  cuadrado,
}
