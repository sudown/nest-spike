<?php

$databaseUrl = "mysql:host=localhost;port=3306;dbname=dev";
$username = "root";
$password = "";

try {
    $pdo = new PDO($databaseUrl, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Inserts para tabela 'patente'
    $pdo->exec("INSERT INTO Patente (Nome, Imagem, Descricao) VALUES 
                ('Iniciante', 'imagem_iniciante.jpg', 'Patente inicial para novos usuários.'),
                ('Intermediário', 'imagem_intermediario.jpg', 'Patente para usuários intermediários com algum progresso.'),
                ('Avançado', 'imagem_avancado.jpg', 'Patente para usuários avançados com grande progresso.')");

    // Inserts para tabela 'pessoa'
    $pdo->exec("INSERT INTO Pessoa (Nome, Senha, Email, Tipo, Username, XP, Canal, UrlAvatar, Youtube, Discord, Linkedin, Instagram, Github, Twitter, Sobre, patenteId) VALUES 
                ('João Silva', '$2b$10\$L2VDk8AEAPVk/x0yFqjXhOC4SQENs.sY7Na8iorKlGVVEfPAFK77S', 'joao.silva@example.com', 'Aluno', 'joao123', 20, 'Canal do João', 'url_avatar_joao', 'joao_youtube', 'joao_discord', 'joao_linkedin', 'joao_instagram', 'joao_github', 'joao_twitter', 'Sobre o João Silva', 1),
                ('Maria Oliveira', '$2b$10\$L2VDk8AEAPVk/x0yFqjXhOC4SQENs.sY7Na8iorKlGVVEfPAFK77S', 'maria.oliveira@example.com', 'Criador', 'maria456', 30, 'Canal da Maria', 'url_avatar_maria', 'maria_youtube', 'maria_discord', 'maria_linkedin', 'maria_instagram', 'maria_github', 'maria_twitter', 'Sobre a Maria Oliveira', 1),
                ('Carlos Santos', '$2b$10\$L2VDk8AEAPVk/x0yFqjXhOC4SQENs.sY7Na8iorKlGVVEfPAFK77S', 'carlos.santos@example.com', 'Aluno', 'carlos789', 40, 'Canal do Carlos', 'url_avatar_carlos', 'carlos_youtube', 'carlos_discord', 'carlos_linkedin', 'carlos_instagram', 'carlos_github', 'carlos_twitter', 'Sobre o Carlos Santos', 1)");

    // Inserts para tabela 'curso'
    $pdo->exec("INSERT INTO Curso (Titulo, Descricao, XP, Duracao, CriadorId, UrlThumbnail) VALUES 
                ('Curso de Programação em Python', 'Aprenda Python do básico ao avançado.', 100, 30, 3, 'url_thumbnail_python.jpg'),
                ('Curso de Desenvolvimento Web', 'Construa sites modernos com HTML, CSS e JavaScript.', 150, 45, 3, 'url_thumbnail_web.jpg'),
                ('Curso de Design Gráfico', 'Crie designs incríveis com ferramentas populares.', 120, 60, 3, 'url_thumbnail_design.jpg')");

    // Inserts para tabela 'modulo'
    $pdo->exec("INSERT INTO Modulo (Titulo, Descricao, Sequencia, fkCursoId) VALUES 
                ('Introdução ao Python', 'Conceitos básicos e instalação do Python.', 1, 1),
                ('Estruturas de Controle em Python', 'Uso de if, else e loops em Python.', 2, 1),
                ('Desenvolvimento Frontend', 'HTML, CSS e JavaScript para iniciantes.', 1, 2),
                ('JavaScript Avançado', 'Promises, async/await e manipulação de eventos.', 2, 2),
                ('Princípios de Design Gráfico', 'Cores, tipografia e layout.', 1, 3),
                ('Ferramentas de Design', 'Utilizando ferramentas populares para design.', 2, 3)");

    // Inserts para tabela 'aula'
    $pdo->exec("INSERT INTO Aula (Titulo, Descricao, XP, UrlVideo, Duracao, fk_modulo_id, Sequencia) VALUES 
                ('Introdução ao Python', 'Visão geral da linguagem Python.', 10, 'url_video_intro_python.mp4', 15, 1, 1),
                ('Variáveis e Tipos de Dados', 'Entendendo variáveis, strings e números em Python.', 15, 'url_video_variaveis_tipos.mp4', 20, 1, 2),
                ('Estruturas de Controle', 'Utilizando if, else e loops.', 20, 'url_video_estruturas_controle.mp4', 25, 1, 3),
                ('HTML Básico', 'Conceitos fundamentais de HTML.', 10, 'url_video_html_basico.mp4', 15, 2, 1),
                ('CSS para Iniciantes', 'Introdução ao estilo com CSS.', 15, 'url_video_css_iniciantes.mp4', 20, 2, 2),
                ('JavaScript Essencial', 'Princípios básicos do JavaScript.', 20, 'url_video_js_essencial.mp4', 25, 2, 3),
                ('Princípios de Design', 'Fundamentos de design gráfico.', 10, 'url_video_principios_design.mp4', 15, 3, 1),
                ('Ferramentas de Design', 'Utilizando ferramentas populares para design.', 15, 'url_video_ferramentas_design.mp4', 20, 3, 2),
                ('Cores e Tipografia', 'Explorando o uso de cores e tipografia.', 20, 'url_video_cores_tipografia.mp4', 25, 3, 3)");

    // Inserts para tabela 'materiais'
    $pdo->exec("INSERT INTO Materiais (Nome, Tipo, URL, fk_Aula_Id) VALUES 
                ('Slides de Introdução ao Python', 'Apresentação', 'url_slides_intro_python.pdf', 1),
                ('Código-fonte Variáveis e Tipos', 'Código', 'url_codigo_variaveis_tipos.zip', 2),
                ('Exercícios de Estruturas de Controle', 'Exercício', 'url_exercicios_estruturas_controle.pdf', 3),
                ('Guia de HTML Básico', 'Guia', 'url_guia_html_basico.docx', 4),
                ('Exemplos de CSS para Iniciantes', 'Exemplo', 'url_exemplos_css_iniciantes.zip', 5),
                ('Projeto Prático em JavaScript', 'Projeto', 'url_projeto_pratico_js.docx', 6),
                ('Paleta de Cores para Design', 'Recurso', 'url_paleta_cores_design.png', 7),
                ('Ferramentas de Design Recomendadas', 'Recurso', 'url_ferramentas_design_recomendadas.pdf', 8),
                ('Modelos de Tipografia', 'Recurso', 'url_modelos_tipografia.docx', 9)");

    // Inserts para tabela 'aulaprogresso'
    $pdo->exec("INSERT INTO AulaProgresso (idAula, idPessoa, concluido, DataInicio, DataFim) VALUES 
                (1, 1, true, '2023-01-01 10:00:00', '2023-01-01 11:00:00'),
                (2, 2, false, '2023-01-02 14:00:00', null),
                (3, 3, true, '2023-01-03 09:30:00', '2023-01-03 10:45:00'),
                (4, 1, false, null, null),
                (5, 2, true, '2023-01-05 12:00:00', '2023-01-05 13:30:00')");

    // Inserts para tabela 'cursoprogresso'
    $pdo->exec("INSERT INTO CursoProgresso (idCurso, idPessoa, concluido, DataInicio, DataFim) VALUES 
                (1, 1, true, '2023-01-01 10:00:00', '2023-01-10 15:00:00'),
                (2, 2, false, '2023-01-02 14:00:00', null),
                (3, 3, true, '2023-01-03 09:30:00', '2023-01-15 11:30:00'),
                (1, 2, false, null, null),
                (2, 1, true, '2023-01-05 12:00:00', '2023-01-20 14:30:00')");

    echo "Inserções realizadas com sucesso!";
} catch (PDOException $e) {
    echo "Erro de conexão: " . $e->getMessage();
}
?>

