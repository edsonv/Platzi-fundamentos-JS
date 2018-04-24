
const edson = {
	nombre: "Edson",
	apellido: "Vargas"
}

function saludar(veces, uppercase) {
	let str = `Hola ${this.nombre} ${this.apellido}`
	str = uppercase ? str.toUpperCase() : str
	for (let i = 0; i < veces; i++) {
		console.log(str)
	}
}

const params = [3, true]
// saludar.call(edson, 3, true)
// saludar.apply(edson, [3, true])
saludar.apply(edson, params)
// saludar.call(edson, ...params)