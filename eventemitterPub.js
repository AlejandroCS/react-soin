const eventEmitter = require('./eventemitterSub')

const steps = [4, 3, 2, 1]

steps.forEach(step => eventEmitter.emit('walk', step))

eventEmitter.emit('doorOpen')
