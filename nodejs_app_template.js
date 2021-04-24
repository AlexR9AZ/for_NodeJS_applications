// import модулей
const http = require("http");
const os = require("os");


// запуск сервера и приложения (response)
http.createServer(function(request, response){
	 
	let userName = os.userInfo().username;
	let currentOs = os.type();
	response.end("Welcome, " + userName + " !" + " You working in: " + currentOs); 
	
}).listen(3333, "127.0.0.1", function(){
	console.log('Сервер запущен на порту 3333');
});