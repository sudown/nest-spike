-- CreateTable
CREATE TABLE "Insignia" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Descricao" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "Imagem" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Aula" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL DEFAULT 'Aula exemplo',
    "Descricao" TEXT NOT NULL,
    "XP" INTEGER,
    "UrlVideo" TEXT NOT NULL,
    "Duracao" INTEGER NOT NULL,
    "fk_modulo_id" INTEGER NOT NULL,
    "Sequencia" INTEGER NOT NULL,
    CONSTRAINT "Aula_fk_modulo_id_fkey" FOREIGN KEY ("fk_modulo_id") REFERENCES "Modulo" ("Id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feedback" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Avaliacao" INTEGER NOT NULL,
    "Comentario" TEXT NOT NULL,
    "fk_Aula_Id" INTEGER NOT NULL,
    "Data" DATETIME,
    "PessoaId" INTEGER NOT NULL,
    CONSTRAINT "Feedback_fk_Aula_Id_fkey" FOREIGN KEY ("fk_Aula_Id") REFERENCES "Aula" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Feedback_PessoaId_fkey" FOREIGN KEY ("PessoaId") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Materiais" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "URL" TEXT NOT NULL,
    "fk_Aula_Id" INTEGER NOT NULL,
    CONSTRAINT "Materiais_fk_Aula_Id_fkey" FOREIGN KEY ("fk_Aula_Id") REFERENCES "Aula" ("Id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Modulo" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "Sequencia" INTEGER NOT NULL,
    "fkCursoId" INTEGER NOT NULL,
    CONSTRAINT "Modulo_fkCursoId_fkey" FOREIGN KEY ("fkCursoId") REFERENCES "Curso" ("Id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "Username" TEXT NOT NULL DEFAULT '',
    "XP" INTEGER NOT NULL DEFAULT 10,
    "Canal" TEXT DEFAULT '',
    "UrlAvatar" TEXT DEFAULT '',
    "Youtube" TEXT DEFAULT '',
    "Discord" TEXT DEFAULT '',
    "Linkedin" TEXT DEFAULT '',
    "Instagram" TEXT DEFAULT '',
    "Github" TEXT DEFAULT '',
    "Twitter" TEXT DEFAULT '',
    "Sobre" TEXT,
    "patenteId" INTEGER DEFAULT 1,
    CONSTRAINT "Pessoa_patenteId_fkey" FOREIGN KEY ("patenteId") REFERENCES "Patente" ("Id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Patente" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Imagem" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Possui" (
    "ID_AlunoIns" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fk_Pessoa_Id" INTEGER NOT NULL,
    "fk_Insignia_Id" INTEGER NOT NULL,
    CONSTRAINT "Possui_fk_Pessoa_Id_fkey" FOREIGN KEY ("fk_Pessoa_Id") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Possui_fk_Insignia_Id_fkey" FOREIGN KEY ("fk_Insignia_Id") REFERENCES "Insignia" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Cursa" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fk_Pessoa_Id" INTEGER NOT NULL,
    "fk_Curso_Id" INTEGER NOT NULL,
    CONSTRAINT "Cursa_fk_Pessoa_Id_fkey" FOREIGN KEY ("fk_Pessoa_Id") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Cursa_fk_Curso_Id_fkey" FOREIGN KEY ("fk_Curso_Id") REFERENCES "Curso" ("Id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Curso" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "XP" INTEGER DEFAULT 0,
    "Duracao" INTEGER DEFAULT 0,
    "CriadorId" INTEGER NOT NULL,
    "UrlThumbnail" TEXT DEFAULT '',
    CONSTRAINT "Curso_CriadorId_fkey" FOREIGN KEY ("CriadorId") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AulaProgresso" (
    "idAula" INTEGER NOT NULL,
    "idPessoa" INTEGER NOT NULL,
    "concluido" BOOLEAN NOT NULL,
    "DataInicio" DATETIME,
    "DataFim" DATETIME,

    PRIMARY KEY ("idAula", "idPessoa"),
    CONSTRAINT "AulaProgresso_idAula_fkey" FOREIGN KEY ("idAula") REFERENCES "Aula" ("Id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "AulaProgresso_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ModuloProgresso" (
    "idModulo" INTEGER NOT NULL,
    "idPessoa" INTEGER NOT NULL,
    "concluido" BOOLEAN NOT NULL,
    "DataInicio" DATETIME,
    "DataFim" DATETIME,

    PRIMARY KEY ("idModulo", "idPessoa"),
    CONSTRAINT "ModuloProgresso_idModulo_fkey" FOREIGN KEY ("idModulo") REFERENCES "Modulo" ("Id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "ModuloProgresso_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CursoProgresso" (
    "idCurso" INTEGER NOT NULL,
    "idPessoa" INTEGER NOT NULL,
    "concluido" BOOLEAN NOT NULL,
    "DataInicio" DATETIME,
    "DataFim" DATETIME,

    PRIMARY KEY ("idCurso", "idPessoa"),
    CONSTRAINT "CursoProgresso_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso" ("Id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CursoProgresso_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);
