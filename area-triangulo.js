let base = 5
let height = 7

// let es una variable
// const es una constante

console.log("El área de un triángulo de base 5 y altura 7 es " + 5 * 7 / 2); // comillas dobles
console.log('El área de un triángulo de base 5 y altura 7 es ' + 5 * 7 / 2); // comillas simples
console.log(`El área de un triángulo de base 5 y altura 7 es ${5 * 7 / 2}`); // comillas invertidas

// Función anónima 
function triangleArea(base, height) {
	return base * height / 2
}

console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${triangleArea(base, height)}`)

// Usando arrow function
let triangleArea = (base, height) => {
	// línea de código
	// línea de código
	// línea de código
	// línea de código
	return base * height / 2
}

// Inline arrow function
let triangleArea = (base, height) => base * height / 2