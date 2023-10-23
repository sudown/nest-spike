/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

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
    "Descricao" TEXT NOT NULL,
    "Xp" INTEGER,
    "Concluido" BOOLEAN NOT NULL,
    "fk_modulo_id" INTEGER NOT NULL,
    CONSTRAINT "Aula_fk_modulo_id_fkey" FOREIGN KEY ("fk_modulo_id") REFERENCES "Modulo" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Feedback" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Avaliacao" INTEGER NOT NULL,
    "Comentario" TEXT NOT NULL,
    "fk_Aula_Id" INTEGER NOT NULL,
    CONSTRAINT "Feedback_fk_Aula_Id_fkey" FOREIGN KEY ("fk_Aula_Id") REFERENCES "Aula" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Materiais" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "URL" TEXT NOT NULL,
    "fk_Aula_Id" INTEGER NOT NULL,
    CONSTRAINT "Materiais_fk_Aula_Id_fkey" FOREIGN KEY ("fk_Aula_Id") REFERENCES "Aula" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Modulo" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "Concluido" BOOLEAN NOT NULL,
    "fkCursoId" INTEGER NOT NULL,
    CONSTRAINT "Modulo_fkCursoId_fkey" FOREIGN KEY ("fkCursoId") REFERENCES "Curso" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nome" TEXT NOT NULL,
    "Senha" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Tipo" TEXT NOT NULL,
    "XP" INTEGER NOT NULL,
    "patenteId" INTEGER,
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
    CONSTRAINT "Cursa_fk_Curso_Id_fkey" FOREIGN KEY ("fk_Curso_Id") REFERENCES "Curso" ("Id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Curso" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Titulo" TEXT NOT NULL,
    "Descricao" TEXT NOT NULL,
    "Concluido" BOOLEAN NOT NULL
);
