const starWars7 = "Star Wars: El despertar de la fuerza";
const pgStarWars7 = 13;

const nameSacha = "Sacha";
const ageSacha = 26;

const nameSanti = "Santi";
const ageSanti = 12

function canWatchStarWars7(name, age, isWithAdult === false) {
	if (age >= pgStarWars7) {
		alert(`${name} puede pasar a ver ${starWars7}`);
	} else if (isWithAdult) {
		alert(`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${edad}, se encuentra acompañada/o por un representante`);
	} else {
		alert(`${name} no puede pasar a ver ${starWars7}. Tiene ${age} y necesita tener ${pgStarWars7}`);
	}
}