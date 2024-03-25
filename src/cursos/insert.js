const axios = require('axios');

// Função para criar um curso com valores genéricos
async function criarCurso() {
  const curso = {
    Titulo: "Curso Genérico",
    Descricao: "Descrição Genérica",
    Duracao: 10, // Duração genérica em minutos
    CriadorId: 3, // ID do criador igual a 3
    UrlThumbnail: "url-da-thumbnail"
  };

  try {
    const response = await axios.post('http://localhost:3333/cursos', curso);
    console.log("Curso criado:", response.data);
  } catch (error) {
    console.error("Erro ao criar curso:", error.message);
  }
}

// Função para criar múltiplos cursos
async function criarCursos(qtdCursos) {
  for (let i = 0; i < qtdCursos; i++) {
    await criarCurso();
  }
}

// Criar 5000 cursos com valores genéricos
criarCursos(900);
