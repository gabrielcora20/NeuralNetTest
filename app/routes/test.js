module.exports = function(application){

	application.get('/test', function(req,res){
		res.render('test/form_test'); 
	});

	application.post('/test/execute', function(req,res){
		var train = new application.learning.training();
		res.render('test/resultado',{result: train.perguntar(req.body.COMMENT)});
		// var model = new application.app.models.ClienteDAO(application.config.dbConnection());
		// model.insertCliente(req.body,function(error,result){
		// 	res.redirect('/cliente/consulta/consulta_clientes');
		// });
	});

	// application.get('/cliente/consulta/consulta_clientes', function(req,res){
	// 	var model = new application.app.models.ClienteDAO(application.config.dbConnection());
	// 	model.getClientes(function(error,result){
	// 		res.render('cliente/consulta_clientes',{clientes:result});
	// 	});
	// });	
}