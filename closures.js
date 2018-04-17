function saludarFamilia(apellido) {
	return function saludarMiembro(nombre) {
		console.log(`hola ${nombre} ${apellido}`)
	}
}

const saludarVargas = saludarFamilia("Vargas")
const saludarPerez = saludarFamilia("Pérez")
const saludarRomero = saludarFamilia("Romero")
// function saludarVargas(nombre) {
// 	console.log(`Hola ${nombre} Gomez`)
// }

// function saludarPerez(nombre) {
// 	console.log(`Hola ${nombre} Perez`)
// }

saludarVargas("Edgar")
saludarVargas("Ramón")
saludarVargas("Alexander")

saludarPerez("Luis")
saludarPerez("Aimara")

saludarRomero("Kimberlein")
saludarRomero("Christian")
saludarRomero("Christian")