const express = require('express');
const router = express.Router();
const { salvarPokemon, listarPokemons } = require('../controllers/pokemonController');

router.post('/', salvarPokemon); // salvar favorito
router.get('/', listarPokemons); // listar favoritos

module.exports = router;
