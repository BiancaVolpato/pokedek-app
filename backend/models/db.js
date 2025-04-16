const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./pokemons.db');

// Cria tabela se não existir
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS favoritos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        tipo TEXT
    )
    `);
});

module.exports = db;
