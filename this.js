class Persona {
	constructor(nombre, amigos = []) {
		this.nombre = nombre
		this.amigos = amigos
	}
	// listarAmigos() {
	// 	// const _this = this
	// 	this.amigos.forEach(function (amigo) {
	// 		console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
	// 	}.bind(this))
	// }

	listarAmigos() {
		// const _this = this
		this.amigos.forEach((amigo) => {
			console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
		})
	}
}

const edson = new Persona("Edson", ["Edgar", "Christian", "Thays"])