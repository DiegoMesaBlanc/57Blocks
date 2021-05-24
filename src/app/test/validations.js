const validate = require('validator');

let validator = {}
let cont = 0;

//VALIDA SI ENVIAN O NO DATOS(SI NO TENEMOS INFORMACION RESPONDE FALSE Y EL SERVICIO GENERA ERROR)
validator.validArrObj = function getObject(theObject, paramObj, paramData) {
    let result = null;

    if (theObject instanceof Array) {
        cont++;
        for (var i = 0; i < theObject.length; i++) {
            if (cont < 11) {
                result = getObject(theObject[i], paramObj, paramData);
            }

            if (cont > 11) {
                break;
            }
        }
    } else {
        for (var prop in theObject) {
            console.log(prop + ': ' + theObject[prop]);

            if (prop == paramObj) {
                if (theObject[prop][paramData]) {
                    return theObject[prop][paramData];
                }
            }

            if (theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                result = getObject(theObject[prop], paramObj, paramData);

                if (result) {
                    break;
                }
            }
        }
    }


    return result;
}

module.exports = validator