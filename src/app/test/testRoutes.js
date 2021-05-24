const express = require("express");
const testController = require("./testController");

const router = express.Router();


/*
 * 
 *  Rutas del API
 * 
 */
router.post('/:param1/:param2', testController.getMatch);



module.exports = router;