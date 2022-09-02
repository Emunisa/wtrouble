function rollAttributes() {
	characters();
	equipment();
	events();
	limit();
	materia();
}

function characters() {
	const characters = [
	'Aerith', 'Tifa', 'Barret', 'Yuffie', 'Vincent', 'Cid', 'Cait Sith'
	];

	var char2 = Math.floor(Math.random() * characters.length);
	var char3 = Math.floor(Math.random() * characters.length);
	var char3b = Math.floor(Math.random() * characters.length);

	while (char2 == char3) {
		char3 = Math.floor(Math.random() * characters.length);
	}

	if (characters[char2] == "Aerith" || characters[char3] == "Aerith") {	
		while (characters[char3b] == "Aerith" || char3b == char2 || char3b == char3) {
			char3b = Math.floor(Math.random() * characters.length);
		}
	} 

	document.getElementById("charRes1").innerHTML = "Cloud";
	
	if (characters[char2] == "Aerith") {
	document.getElementById("charRes2").innerHTML = characters[char2] + " (" + characters[char3b] + ")";
	document.getElementById("charRes3").innerHTML = characters[char3];
	}
	else if(characters[char3] == "Aerith") {
	document.getElementById("charRes3").innerHTML = characters[char3] + " (" + characters[char3b] + ")";
	document.getElementById("charRes2").innerHTML = characters[char2];
	}
	else {
	document.getElementById("charRes2").innerHTML = characters[char2];
	document.getElementById("charRes3").innerHTML = characters[char3];
	}
}

function equipment() {
	const equipment = [
	'Weapon', 'Armor', 'Accessory'
	];
	
	const eqimage = [
	'FFVII_Sword_Icon.PNG', 'FFVII_Armor_Icon.PNG', 'FFVII_Accessory_Icon.PNG'
	];
	
	if (document.getElementById("indpEq").checked){
	} else {
		var eq1 = Math.floor(Math.random() * equipment.length);
		var eq2 = Math.floor(Math.random() * equipment.length);
		while (eq1 == eq2) {
			eq2 = Math.floor(Math.random() * equipment.length);
		}
		document.getElementById("eqRes1").innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
		document.getElementById("eqRes2").innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
		document.getElementById("eqRes3").innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
	}

}

function rolleq1() {
	if (document.getElementById("indpEq").checked){
		const equipment = [
		'Weapon', 'Armor', 'Accessory'
		];
		
		const eqimage = [
		'FFVII_Sword_Icon.PNG', 'FFVII_Armor_Icon.PNG', 'FFVII_Accessory_Icon.PNG'
		];	
		
		var eq1 = Math.floor(Math.random() * equipment.length);
		var eq2 = Math.floor(Math.random() * equipment.length);
		
		while (eq1 == eq2) {
		eq2 = Math.floor(Math.random() * equipment.length);
		}
		
		document.getElementById("eqRes1").innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
	}
}

function rolleq2() {
	if (document.getElementById("indpEq").checked){
		const equipment = [
		'Weapon', 'Armor', 'Accessory'
		];
		
		const eqimage = [
		'FFVII_Sword_Icon.PNG', 'FFVII_Armor_Icon.PNG', 'FFVII_Accessory_Icon.PNG'
		];	
		
		var eq1 = Math.floor(Math.random() * equipment.length);
		var eq2 = Math.floor(Math.random() * equipment.length);
		
		while (eq1 == eq2) {
		eq2 = Math.floor(Math.random() * equipment.length);
		}
		
		document.getElementById("eqRes2").innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
	}
}

function rolleq3() {
	if (document.getElementById("indpEq").checked){
		const equipment = [
		'Weapon', 'Armor', 'Accessory'
		];
		
		const eqimage = [
		'FFVII_Sword_Icon.PNG', 'FFVII_Armor_Icon.PNG', 'FFVII_Accessory_Icon.PNG'
		];	
		
		var eq1 = Math.floor(Math.random() * equipment.length);
		var eq2 = Math.floor(Math.random() * equipment.length);
		
		while (eq1 == eq2) {
		eq2 = Math.floor(Math.random() * equipment.length);
		}
		
		document.getElementById("eqRes3").innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
	}
}

function events() {
	const event = [
	'Breed Gold Chocobo', 'Beat Emerald', 'Beat Ruby', 'Complete Ancient Forest', 'Beat Ultimate', 'Defeat Raps (Wutai)', 'Finish Pagoda (Wutai)', 'Finish Mogs House', 'Achieve S Rank Chocobo', 'Collect all Summon Materia'
	];
	
	var ev1 = Math.floor(Math.random() * event.length);
	var ev2 = Math.floor(Math.random() * event.length);
	
	while (ev1 == ev2) {
		ev2 = Math.floor(Math.random() * event.length);
	}
	
	document.getElementById("EventResult").innerHTML = event[ev1] + ", " + event[ev2];
}

function limit() {
	const limit = [
	'1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1'
	];

	document.getElementById("LimitResult").innerHTML = limit[Math.floor(Math.random() * limit.length)];
}

function materia() {
	const materia = [
	'Magic', 'Command', 'Summon', 'Support', 'Independent'
	];
	const materiaimage = [
	'FFVII_Magic_Materia_Icon.PNG', 'FFVII_Command_Materia_Icon.PNG', 'FFVII_Summon_Materia_Icon.PNG', 'FFVII_Support_Materia_Icon.PNG', 'FFVII_Independent_Materia_Icon.PNG' 
	]
	
	var mat1 = Math.floor(Math.random() * materia.length);
	var mat2 = Math.floor(Math.random() * materia.length);
	
	while (mat1 == mat2) {
		mat2 = Math.floor(Math.random() * materia.length);
	}
	if (document.getElementById("noitem").checked){
		var mat3 = Math.floor(Math.random() * materia.length);
		
		while (mat3 == mat1 || mat3 == mat2) {
		mat3 = Math.floor(Math.random() * materia.length);
		}
		
		document.getElementById("MateriaResult").innerHTML = "<img src=assets/" + materiaimage[mat1] + "> " + materia[mat1] + ", <img src=assets/" + materiaimage[mat2] + "> " + materia[mat2] + ", <img src=assets/" + materiaimage[mat3] + "> " + materia[mat3];
	} else {
		document.getElementById("MateriaResult").innerHTML = "<img src=assets/" + materiaimage[mat1] + "> " + materia[mat1] + ", <img src=assets/" + materiaimage[mat2] + "> " + materia[mat2];
	}
}