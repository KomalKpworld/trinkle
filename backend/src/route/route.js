const express = require('express');
const router = express.Router();
//const mid=require("../middleware/auth")
const pokmanController = require("../controllers/pockmanController")
const userController = require("../controllers/userControlller")
const middleware = require("../middlware/auth")

//......................... pokman api ...............................
router.post("/pokeman", pokmanController.createPokemon)
router.get('/pokeman',middleware, pokmanController.getAllPokemon)
router.get("/pokeman/:id", pokmanController.getPokemonById)
router.put("/pokeman/:id", pokmanController.updatePokemonById)
router.delete("/pokeman/:id", pokmanController.deletePokemonById)

//................  user api  ..........................
router.post("/register", userController.userCreate)
router.post("/login",userController.login)




module.exports= router;