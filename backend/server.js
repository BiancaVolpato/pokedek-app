const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Caminho para o arquivo de favoritos
const favoritosPath = path.join(__dirname, 'favoritos.json');

// Rota para adicionar um Pokémon favorito
app.post('/api/favoritos', (req, res) => {
  const novoFavorito = req.body;

  fs.readFile(favoritosPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler favoritos' });

    let favoritos = JSON.parse(data);
    favoritos.push(novoFavorito);

    fs.writeFile(favoritosPath, JSON.stringify(favoritos, null, 2), (err) => {
      if (err) return res.status(500).json({ erro: 'Erro ao salvar favorito' });
      res.status(201).json({ mensagem: 'Favorito salvo com sucesso!' });
    });
  });
});

// Rota para listar todos os favoritos
app.get('/api/favoritos', (req, res) => {
  fs.readFile(favoritosPath, 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler favoritos' });
    const favoritos = JSON.parse(data);
    res.json(favoritos);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
