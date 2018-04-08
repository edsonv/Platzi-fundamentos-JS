
const nombre = 'Edson'
const dias = [
	'lunes',
	'martes',
	'miercoles',
	'jueves',
	'viernes',
	'sábado',
	'domingo'
]

function correr() {
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max - min)) + min
}

let totalKm = 0
const length dias.length
for (let i = 0; i < length; i++) {
	const km = correr()
	totalKm += km
	console.log(`El día ${dias[i]} ${nombre} corrió ${km} Km`)
}

const promedioKm = totalKm / length
console.log(`En promedio, ${nombre} corrió ${promedioKm}`.toFixed(2))