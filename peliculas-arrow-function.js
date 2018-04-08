const	starWars7 = "Star Wars: El despertar de la fuerza",
		pgStarWars7 = 13,
		nameSacha = "Sacha",
		ageSacha = 26,
		nameSanti = "Santi",
		ageSanti = 12

let name = prompt("Ingresa tu nombre:"),
	age = prompt(`${name} escribe tu edad:`)


let canWatchStarWars7 = (name, age, isWithAdult === false) => {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${edad}, se encuentra acompañada/o por un representante`);
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}. Tiene ${age} y necesita tener ${pgStarWars7}`);
	}
}