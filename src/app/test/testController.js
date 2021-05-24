const responseManagement = require('./../common/responseManagement');
const validation = require('./validations');

const axios = require('axios')



module.exports.getMatch = (request, response) => {
	let body = request.body;
	let paramObj = request.params.param1;
	let paramData = request.params.param2;


	if (paramObj && paramData) {
		let parameters = paramData.split(' ');

		if (parameters.length > 0) {
			let objArrValid = validation.validArrObj(body, paramObj, parameters[0]);

			if (objArrValid) {
				let rsValid = objArrValid * parameters[1];

				return responseManagement.customResponse(response, rsValid);
			} else {
				return responseManagement.customErrorResponse(response, 'Not parameters found');
			}
		} else {
			return responseManagement.customErrorResponse(response, 'Dont send more two parameters');
		}
	}
}
