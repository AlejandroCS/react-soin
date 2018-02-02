const Human = require('./Human')

class Person extends Human {
  constructor() {
    super()
    this.name = 'Jhon Doe'
  }

  setName(name) {
    this.name = name
  }
}

module.exports = Person