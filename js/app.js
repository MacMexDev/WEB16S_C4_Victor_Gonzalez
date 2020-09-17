var calculadora = {

	init: function(){

	this.asignar_pulsar();

	},

	asignar_pulsar: function(){

		pteclas = document.getElementsByClassName('tecla');

		for (var i = 0; i < pteclas.length; i++) {
			// pteclas[i].onclick = this.pulsar;
			pteclas[i].onmousedown = this.presionar_tecla;
			pteclas[i].onmouseup = this.soltar_tecla;
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

}

calculadora.init();