'use strict';
const responses = {};

//RESPUESTA A LOS ESTADOS DESDE LA BASE DE DATOS
responses.customResponse = function (response, message) {
	return response.status(200).send({
		value: message
	});
};

responses.customErrorResponse = function (response, message) {
	return response.status(202).send({
		message: message
	});
};

responses.parametersErrorResponse = function (response, message) {
	return response.status(400).send({
		message: message
	});
};

//ERROR EN LOS SERVIDORES
responses.serverErrorResponse = function (response) {
	return response.status(500).send({
		message: 'Internal server error'
	});
};


module.exports = responses;