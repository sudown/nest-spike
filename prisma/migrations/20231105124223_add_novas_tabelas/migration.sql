-- CreateTable
CREATE TABLE `Insignia` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Descricao` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Imagem` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Aula` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Descricao` VARCHAR(191) NOT NULL,
    `Xp` INTEGER NULL,
    `fk_modulo_id` INTEGER NOT NULL,
    `Sequencia` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Feedback` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Avaliacao` INTEGER NOT NULL,
    `Comentario` VARCHAR(191) NOT NULL,
    `fk_Aula_Id` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Materiais` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Tipo` VARCHAR(191) NOT NULL,
    `URL` VARCHAR(191) NOT NULL,
    `fk_Aula_Id` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Modulo` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Titulo` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,
    `Sequencia` INTEGER NOT NULL,
    `fkCursoId` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pessoa` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Senha` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `Tipo` VARCHAR(191) NOT NULL,
    `XP` INTEGER NOT NULL DEFAULT 10,
    `patenteId` INTEGER NULL DEFAULT 1,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patente` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Nome` VARCHAR(191) NOT NULL,
    `Imagem` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Possui` (
    `ID_AlunoIns` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_Pessoa_Id` INTEGER NOT NULL,
    `fk_Insignia_Id` INTEGER NOT NULL,

    PRIMARY KEY (`ID_AlunoIns`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cursa` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_Pessoa_Id` INTEGER NOT NULL,
    `fk_Curso_Id` INTEGER NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Curso` (
    `Id` INTEGER NOT NULL AUTO_INCREMENT,
    `Titulo` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AulaProgresso` (
    `idAula` INTEGER NOT NULL,
    `idPessoa` INTEGER NOT NULL,
    `concluido` BOOLEAN NOT NULL,

    PRIMARY KEY (`idAula`, `idPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModuloProgresso` (
    `idModulo` INTEGER NOT NULL,
    `idPessoa` INTEGER NOT NULL,
    `concluido` BOOLEAN NOT NULL,

    PRIMARY KEY (`idModulo`, `idPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CursoProgresso` (
    `idCurso` INTEGER NOT NULL,
    `idPessoa` INTEGER NOT NULL,
    `concluido` BOOLEAN NOT NULL,

    PRIMARY KEY (`idCurso`, `idPessoa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Aula` ADD CONSTRAINT `Aula_fk_modulo_id_fkey` FOREIGN KEY (`fk_modulo_id`) REFERENCES `Modulo`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Feedback` ADD CONSTRAINT `Feedback_fk_Aula_Id_fkey` FOREIGN KEY (`fk_Aula_Id`) REFERENCES `Aula`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Materiais` ADD CONSTRAINT `Materiais_fk_Aula_Id_fkey` FOREIGN KEY (`fk_Aula_Id`) REFERENCES `Aula`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Modulo` ADD CONSTRAINT `Modulo_fkCursoId_fkey` FOREIGN KEY (`fkCursoId`) REFERENCES `Curso`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pessoa` ADD CONSTRAINT `Pessoa_patenteId_fkey` FOREIGN KEY (`patenteId`) REFERENCES `Patente`(`Id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Possui` ADD CONSTRAINT `Possui_fk_Pessoa_Id_fkey` FOREIGN KEY (`fk_Pessoa_Id`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Possui` ADD CONSTRAINT `Possui_fk_Insignia_Id_fkey` FOREIGN KEY (`fk_Insignia_Id`) REFERENCES `Insignia`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cursa` ADD CONSTRAINT `Cursa_fk_Pessoa_Id_fkey` FOREIGN KEY (`fk_Pessoa_Id`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cursa` ADD CONSTRAINT `Cursa_fk_Curso_Id_fkey` FOREIGN KEY (`fk_Curso_Id`) REFERENCES `Curso`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AulaProgresso` ADD CONSTRAINT `AulaProgresso_idAula_fkey` FOREIGN KEY (`idAula`) REFERENCES `Aula`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AulaProgresso` ADD CONSTRAINT `AulaProgresso_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModuloProgresso` ADD CONSTRAINT `ModuloProgresso_idModulo_fkey` FOREIGN KEY (`idModulo`) REFERENCES `Modulo`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModuloProgresso` ADD CONSTRAINT `ModuloProgresso_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CursoProgresso` ADD CONSTRAINT `CursoProgresso_idCurso_fkey` FOREIGN KEY (`idCurso`) REFERENCES `Curso`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CursoProgresso` ADD CONSTRAINT `CursoProgresso_idPessoa_fkey` FOREIGN KEY (`idPessoa`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
