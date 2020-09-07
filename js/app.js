var calculadora = {

	init: function(){

	this.asignar_pulsar();

	},

	asignar_pulsar: function(){

		pteclas = document.getElementsByClassName('tecla');

		for (var i = 0; i < pteclas.length; i++) {
			pteclas[i].onclick = this.pulsar;
			// pteclas[i].onkeydown = this.presionar_tecla;
			// pteclas[i].onkeyup = this.soltar_tecla;
		}

	},
	presionar_tecla: function(event){
		console.log(this);
	},
	pulsar: function(event){

		console.log(event.target);

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
	
	soltar: function(a){

	}

}

calculadora.init();