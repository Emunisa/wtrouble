var rolled;

function rollAttributes() {
	characters();
	events();
	limit();
	materia();
	rolled = true;
	save();
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

function rolleq(num) {
	if(rolled){
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

		document.getElementById(`eqRes${num}`).innerHTML = "<img src=assets/" + eqimage[eq1] + "> " + equipment[eq1] + ", <img src=assets/" + eqimage[eq2] + "> "  + equipment[eq2];
		save();
	} else {
		alert("Roll Eq will roll equipment once the run parameters have been rolled.")
	}
}

function events() {
	const event = [
	'Breed Gold Chocobo', 'Beat Emerald', 'Beat Ruby', 'Complete Ancient Forest', 'Beat Ultimate', 'Defeat Raps (Wutai)', 'Finish Pagoda (Wutai)', 'Finish Mogs House', 'Achieve S Rank Chocobo', 'Collect all Summon Materia', 'Beat Gelnika Turks'
	];

	var ev1 = Math.floor(Math.random() * event.length);
	var ev2 = Math.floor(Math.random() * event.length);

	while (ev1 == ev2) {
		ev2 = Math.floor(Math.random() * event.length);
	}

	document.getElementById("EventResult").innerHTML = event[ev1] + ", " + event[ev2];
	save();
}

function limit() {
	const limit = [
	'1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1'
	];

	document.getElementById("LimitResult").innerHTML = limit[Math.floor(Math.random() * limit.length)];
}

function materiamodeswap() {
	if(document.getElementById("noitem").checked) {
		alert("Enabling 'No Item' mode will grant you three materia options, allows you to use 1-1 limits, and enables the Barret Clause (see FAQ below).");
		document.getElementById("matlabel").innerHTML = "Materia (No Item)";
	} else {
		document.getElementById("matlabel").innerHTML = "Materia";
	}

	if (rolled) {
		materia();
	}
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
	save();
}

function save() {
	if(rolled) {
		localStorage.table = document.getElementById("EntireTable").innerHTML;
	}
	
	if (document.getElementById("noitem").checked) {
		localStorage.setItem("noitem", true);
	} else {
		delete localStorage.noitem;
	}
}

function load() {
	if ('table' in localStorage) {
		document.getElementById("EntireTable").innerHTML = localStorage.table;
		rolled=true;
	}

	if ('noitem' in localStorage) {
		document.getElementById("noitem").checked = true;
		document.getElementById("matlabel").innerHTML = "Materia (No Item)";
	}
}

function reset() {
	delete localStorage.table;
	delete localStorage.noitem;
	rolled=false;
	document.getElementById("noitem").checked = false;
	// maybe we just force a refresh instead?
	document.getElementById("EntireTable").innerHTML = `<th colspan = 4>Results</th>
	<tr class="tableheader">
		<td>Category</td>
		<td>Character 1 <button type="button" onclick="rolleq(1); save()" title="Rolls equipment when using independent equipment mode">Roll Eq</button></td>
		<td>Character 2 <button type="button" onclick="rolleq(2); save()" title="Rolls equipment when using independent equipment mode">Roll Eq</button></td>
		<td>Character 3 <button type="button" onclick="rolleq(3); save()" title="Rolls equipment when using independent equipment mode">Roll Eq</button></td>
	</tr>
	<tr>
		<td class="cat">Character</td>
		<td id="charRes1"></td>
		<td id="charRes2"></td>
		<td id="charRes3"></td>
	</tr>
	<tr>
		<td class="cat">Equipment</td>
		<td id="eqRes1"></td>
		<td id="eqRes2"></td>
		<td id="eqRes3"></td>
	</tr>
	<tr>
		<td class="cat" id="matlabel">Materia</td>
		<td colspan = 3 id="MateriaResult">
	</tr>
	<tr>
		<td class="cat">Limit Tier</td>
		<td colspan = 3 id="LimitResult">
	</tr>
	<tr>
		<td class="cat">Event <button type="button" onclick="events()">Reroll</button></td>
		<td colspan = 3 id="EventResult">
	</tr>`;
}

window.onload = () => load();
