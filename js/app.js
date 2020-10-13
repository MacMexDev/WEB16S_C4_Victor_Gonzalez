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

		var strdply, valt = element.target.alt;

		switch (valt) { 
	   	case 'On': 
      	strdply = '0';
      	break 
	   	case 'punto': 
      	strdply = Calculadora.addPunto(vdisplay);
      	break 
	   	case 'signo': 
      	strdply = Calculadora.addSigno(vdisplay);
      	break 
	   	default: 
      	if (Calculadora.validaNumero(valt)) {
					if (vdisplay == '0') {
						strdply = valt;
					} else {
						strdply = vdisplay + valt;
					}
				} else {
					strdply = vdisplay;
				}
		}

		strdply = Calculadora.validaLargo(strdply);

		document.querySelector('#display').innerHTML = strdply;

	},

	validaNumero: function(str){
		var out;
		if (str == '1' || str == '2' || str == '3' || str == '4' || str == '5' || str == '6' || str == '7' || str == '8' || str == '9' || str == '0' ) {
			out = true;
		}
		return out;
	},

	addPunto: function(str){

		var out, num = str.indexOf('.');

		if (num < 0) {
			out = str + '.';
		} else {
			out = str;
		}

		return out;
	},

	addSigno: function(str){
		var out, num = str.indexOf('-');

		if (str == 0) {
			out = str;
		} else if (num < 0) {
			out = '-'+str;
		} else {
			out = str.replace('-','');
		}

		return out;
	},

	validaLargo: function(str){

		var out, strtmp=str, vlgth=8;

		if (strtmp.indexOf('.') >= 0) {
			strtmp = strtmp.replace('.','');
			vlgth ++;
		}

		if (strtmp.indexOf('-') >= 0) {
			strtmp = strtmp.replace('-','');
			vlgth ++;
		}

		if (strtmp.indexOf('.') >= 0 && strtmp.indexOf('-')>= 0) {
			strtmp = strtmp.replace('.','');
			strtmp = strtmp.replace('-','');
			vlgth = vlgth+2;
		}

		if (strtmp.length <= 8) {
			out = str;
		} else {
			out = str.substring(0,vlgth);
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