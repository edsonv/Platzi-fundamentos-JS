const dias = [
	"DOMINGO",
	"LUNES",
	"MARTES",
	"MIÉRCOLES",
	"JUEVES",
	"VIERNES",
	"SÁBADO"
]

const nacimiento = new Date(1987, 4 - 1, 12)
const hoy = new Date()
const tiempoMS = hoy - nacimiento
const tiempoSeg = tiempoMS / 1000
const timepoMin = tiempoSeg / 60
const tiempoHoras = timepoMin / 60
const tiempoDias = tiempoHoras / 24
const tiempoYear = tiempoDias / 365
const proximo = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate())
console.log(dias[proximo.getDay()])
console.log(tiempoYear)
