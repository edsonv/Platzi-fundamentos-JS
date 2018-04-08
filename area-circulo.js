let radio = prompt("Ingrese un valor para el radio")
// const pi = Math.PI

let circleArea = (radio) => Math.PI * Math.pow(radio, 2)

console.log(`El área de un círculo de radio ${radio} es: ${circleArea(radio).toFixed(2)}`)