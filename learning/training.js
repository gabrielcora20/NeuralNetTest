//inclusao da biblioteca de rede neural

function training(){
	this._brain = require('brain.js');
	this._net = new this._brain.recurrent.LSTM();
}

training.prototype.treinar = function(){
	const trainingData = [
	  {input:'idiota',output:'Xingamento'},
	  {input:'babaca',output:'Xingamento'},
	  {input:'Fedido',output:'Xingamento'},
	  {input:'lixo',output:'Xingamento'}
	];
	this._net.train(trainingData, { iterations: 1000 });
}

training.prototype.perguntar = function(comment){
	return (this._net.run(comment));
}

//var training = function(nome){

	// var net = new brain.NeuralNetwork();

	// net.train([
	//  	'gabriel', output: { SAIDA : 1}},
	//  	{ input: { NOME: 'irineu' }, output: { SAIDA : 0}}
	// ]);

	// var output = net.run({ NOME : nome });


	// var net = new brain.recurrent.LSTM();

	// net.train([
	//   'doe, a deer, a female deer',
	//   'ray, a drop of golden sun',
	//   'me, a name I call myself',
	// ]);

	// var output = net.run(nome);  // ', a deer, a female deer'

	

	

	//var output = net.run('I feel great about the world!');  // 'happy'

	//console.log(output);
	//return output;
//}

module.exports = function(){
	return training;
}