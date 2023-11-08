/*
  Warnings:

  - Added the required column `DataFim` to the `AulaProgresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DataInicio` to the `AulaProgresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `CriadorId` to the `Curso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DataFim` to the `CursoProgresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DataInicio` to the `CursoProgresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DataFim` to the `ModuloProgresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DataInicio` to the `ModuloProgresso` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Canal` to the `Pessoa` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `AulaProgresso` ADD COLUMN `DataFim` DATETIME(3) NOT NULL,
    ADD COLUMN `DataInicio` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Curso` ADD COLUMN `CriadorId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `CursoProgresso` ADD COLUMN `DataFim` DATETIME(3) NOT NULL,
    ADD COLUMN `DataInicio` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ModuloProgresso` ADD COLUMN `DataFim` DATETIME(3) NOT NULL,
    ADD COLUMN `DataInicio` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Pessoa` ADD COLUMN `Canal` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Curso` ADD CONSTRAINT `Curso_CriadorId_fkey` FOREIGN KEY (`CriadorId`) REFERENCES `Pessoa`(`Id`) ON DELETE RESTRICT ON UPDATE CASCADE;
