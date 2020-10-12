var Calculadora = {

	init: function(){

	this.asignarTriggerTecla();

	},

	asignarTriggerTecla: function(){

		var pteclas = document.querySelectorAll("[class~='tecla']");

		for (var i = 0; i < pteclas.length; i++) {

			pteclas[i].onmousedown = this.presionarTecla;
			pteclas[i].onmouseup = this.soltarTecla;

			pteclas[i].addEventListener("click",this.addNumber);
			
		}

	},

	presionarTecla: function(element){

		var vw = element.target.width - 3;
		var vh = element.target.height - 3;
		
		element.target.style.height = vh+'px';
		element.target.style.width = vw+'px';
		
	},

	soltarTecla: function(element){

		var vw = element.target.width + 3;
		var vh = element.target.height + 3;
		
		element.target.style.height = vh+'px';
		element.target.style.width = vw+'px';

	},

	addNumber: function(element){

		var vdisplay = document.getElementById("display").innerHTML;

		var vnum = element.target.alt;

		if (this.validaNumero(vnum)) {
			if (vdisplay == '0') {
				document.querySelector('#display').innerHTML = vnum;
			} else {
				document.querySelector('#display').innerHTML = document.querySelector('#display').innerHTML + vnum;
			}
		} else if (vnum == 'On') {
			document.querySelector('#display').innerHTML = '0';
		}

	},

	validaNumero: function(vnum){
		var out;
		if (vnum == '1' || vnum == '2' || vnum == '3' || vnum == '4' || vnum == '5' || vnum == '6' || vnum == '7' || vnum == '8' || vnum == '9' || vnum == '0' ) {
			out = true;
		}
		return out;
	},

	suma: function(a,b){
		var out = a+b;
		return out;
	},
	resta: function(a,b){
		var out = a-b;
		return out;
	},
	multiplica: function(a,b){
		var out = a*b;
		return out;
	},
	divide: function(a,b){
		var out = a/b;
		return out;
	}

};

Calculadora.init();