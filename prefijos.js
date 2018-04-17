

// function agregarPrefijo(prefijo) {
// 	return function (palabra) {
// 		console.log(`${prefijo}${palabra}`)
// 	}
// }

const prefixer = (prefijo) => (palabra) => console.log(`${prefijo}${palabra}`)
const prefijoRe = prefixer("re")
const prefijoIn = prefixer("in")

prefijoRe("bueno")
prefijoIn("creible")