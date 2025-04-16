    import axios from "axios";

    export async function buscarResumoWiki(pokemonName) {
    try {
        const response = await axios.get(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${pokemonName}`
        );

        // Verifica se achou uma página válida
        if (response.data.type === "standard") {
        return response.data.extract;
        } else {
        return "Nenhuma descrição encontrada na Wikipédia.";
        }
    } catch (error) {
        console.error("Erro ao buscar descrição da Wikipedia:", error);
        return "Erro ao buscar descrição.";
    }
    }
