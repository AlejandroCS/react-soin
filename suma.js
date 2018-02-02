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

module.exports = {
  suma,
  multiplicar,
}
