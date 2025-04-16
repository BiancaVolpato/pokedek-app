const db = require('../models/db');

function salvarPokemon(req, res) {
    const { nome, tipo } = req.body;
    const sql = 'INSERT INTO favoritos (nome, tipo) VALUES (?, ?)';

    db.run(sql, [nome, tipo], (err) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.status(201).json({ mensagem: 'Pokémon salvo!' });
    });
}

function listarPokemons(req, res) {
  db.all('SELECT * FROM favoritos', (err, rows) => {
    if (err) return res.status(500).json({ erro: err.message });
    res.json(rows);
    });
}

module.exports = { salvarPokemon, listarPokemons };
