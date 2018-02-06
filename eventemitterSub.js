const { EventEmitter } = require('events')
const eventEmitter = new EventEmitter()

const ringBell = () => {
  console.log('ring ring ring')
}

const lockDoor = () => {
  console.log('Door locked!')
}

eventEmitter.on('doorOpen', ringBell)
eventEmitter.on('walk', (step) => console.log(`Walk ${step} ${step > 1 ? 'steps' : 'step'}`))

module.exports = eventEmitter