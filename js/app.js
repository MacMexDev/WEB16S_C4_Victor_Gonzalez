var Calculadora = {

	asignar_pulsar: function(){

		pteclas = document.querySelectorAll('[class~=tecla]');

		for (var i = 0; i < pteclas.length; i++) {

			pteclas[i].onmousedown = this.presionar_tecla;
			pteclas[i].onmouseup = this.soltar_tecla;

			pteclas[i].addEventListener("click",this.add_number);
			
		}

	},

	presionar_tecla: function(element){

		vw = element.target.width - 3;
		vh = element.target.height - 3;
		
		element.target.style.height = vh+'px';
		element.target.style.width = vw+'px';
		
	},

	soltar_tecla: function(element){

		vw = element.target.width + 3;
		vh = element.target.height + 3;
		
		element.target.style.height = vh+'px';
		element.target.style.width = vw+'px';

	},

	add_number: function(element){

		var vdisplay = document.getElementById("display").innerHTML;

		var vnum = element.target.alt;

		if (vnum == '1' || vnum == '2' || vnum == '3' || vnum == '4' || vnum == '5' || vnum == '6' || vnum == '7' || vnum == '8' || vnum == '9' || vnum == '0' ) {
			if (vdisplay == '0') {
				document.querySelector('#display').innerHTML = vnum;
			} else {
				document.querySelector('#display').innerHTML = document.querySelector('#display').innerHTML + vnum;
			}
		} else if (vnum == 'On') {
			document.querySelector('#display').innerHTML = '0';
		}

	},

	suma: function(a,b){
		var out = a+b
		return out;
	},
	resta: function(a,b){
		var out = a-b
		return out;
	},
	multiplica: function(a,b){
		var out = a*b
		return out;
	},
	divide: function(a,b){
		var out = a/b
		return out;
	},
	init: function(){

	this.asignar_pulsar();

	},

}

Calculadora.init();