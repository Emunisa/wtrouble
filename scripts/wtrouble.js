function rollAttributes() {
	characters();
	equipment();
	events();
	limit();
	materia();
}

const characters = [ 'Aerith', 'Tifa', 'Barret', 'Yuffie', 'Vincent', 'Cid', 'Cait Sith' ];
const equipment = [ 'Weapon', 'Armor', 'Accessory' ];
const limits = [ '1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1' ]
const materia = [ 'Magic', 'Command', 'Summon', 'Support', 'Independent' ];
const events = [
	'Breed Gold Chocobo',
	'Beat Emerald',
	'Beat Ruby',
	'Complete Ancient Forest',
	'Beat Ultimate',
	'Defeat Raps (Wutai)',
	'Finish Pagoda (Wutai)',
	'Finish Mogs House',
	'Achieve S Rank Chocobo',
	'Collect all Summon Materia',
	'Beat Gelnika Turks'
];

const valueToIconMap = {
	'Weapon': 'FFVII_Sword_Icon.PNG',
	'Armor': 'FFVII_Armor_Icon.PNG',
	'Accessory': 'FFVII_Accessory_Icon.PNG',
	'Magic': 'FFVII_Magic_Materia_Icon.PNG',
	'Command': 'FFVII_Command_Materia_Icon.PNG',
	'Summon': 'FFVII_Summon_Materia_Icon.PNG',
	'Support': 'FFVII_Support_Materia_Icon.PNG',
	'Independent': 'FFVII_Independent_Materia_Icon.PNG'
};

// note: don't do this
Array.prototype.shuffle = function shuffle() {
	let copy = this.concat();
	let currentIdx = copy.length;

	while (currentIdx != 0) {
		let targetIdx = Math.floor(Math.random() * currentIdx);
		currentIdx--;

		let temp = copy[currentIdx];
		copy[currentIdx] = copy[targetIdx];
		copy[targetIdx] = temp;
	}

	return copy;
}

const getInnerHTML = (values, take) => {
	let innerHtml = '';

	while (take != 0) {
		// pull first value of randomly ordered array
		let value = values.pop();

		// check to see if there is an icon and add that
		if (value in valueToIconMap) {
			innerHtml += `<img src=assets/${valueToIconMap[value]} />`;
		}

		// add the value`
		innerHtml += value;

		// if its aerith add the backup value
		if (value == 'Aerith') {
			innerHtml += ` (${values.pop()})`;
		}

		take--;

		if (take != 0) {
			innerHtml += ', ';
		}
	}

	return innerHtml;
}

function setCharacters() {
	let chars = characters.shuffle();

	document.getElementById("charRes1").innerHTML = "Cloud";
	document.getElementById("charRes2").innerHTML = getInnerHTML(chars, 1);
	document.getElementById("charRes3").innerHTML = getInnerHTML(chars, 1);
}

function setAllEquipment() {
	if (document.getElementById("indpEq").checked) {
		return;
	}

	let equips = equipment.shuffle();
	let innerHtml = getInnerHTML(equips, 2);

	document.getElementById("eqRes1").innerHTML = innerHtml;
	document.getElementById("eqRes2").innerHTML = innerHtml;
	document.getElementById("eqRes3").innerHTML = innerHtml;
}

function setEquipment(num) {
	if (!document.getElementById("indpEq").checked) {
		return;
	}

	let equips = equipment.shuffle();
	let innerHtml = getInnerHTML(equips, 2);

	document.getElementById(`eqRes${num}`).innerHTML = innerHtml;
}

function setEvents() {
	let evnts = events.shuffle();
	document.getElementById("EventResult").innerHTML = getInnerHTML(evnts, 2);
}

function setLimits() {
	let lmts = limits.shuffle();
	document.getElementById("LimitResult").innerHTML = getInnerHTML(lmts, 1);
}

function setMateria() {
	let mats = materia.shuffle();
	let take = document.getElementById("noitem").checked ? 3 : 2;
	document.getElementById("MateriaResult").innerHTML = getInnerHTML(mats, take);
}

function setAll() {
	setCharacters();
	setAllEquipment();
	setEvents();
	setLimits();
	setMateria();
}
