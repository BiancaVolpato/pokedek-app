const express = require('express');
const cors = require('cors');
const pokemonRoutes = require('./routes/pokemons');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use('/api/pokemons', pokemonRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
