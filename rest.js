function restFunc(...args) {
  console.log(args)
  args.forEach((element, index) => console.log(`Index: ${index}, value: ${element}`))
}

restFunc(1,2,3,4)
restFunc('hola', 'mundo', 'tipico')
